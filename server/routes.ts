import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // In a real application, you would send an email here
      console.log("New contact message received:", message);
      
      res.status(201).json({ 
        success: true, 
        message: "Message sent successfully!" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  // Get contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    try {
      const resumePath = path.resolve(process.cwd(), "attached_assets", "Navin Kumar Resume-Updated_1734161274680_Navin Kumar S_1753877196339.pdf");
      
      if (fs.existsSync(resumePath)) {
        res.download(resumePath, "Navin_Kumar_Resume.pdf", (err) => {
          if (err) {
            console.error("Resume download error:", err);
            res.status(500).json({ 
              success: false, 
              message: "Failed to download resume" 
            });
          }
        });
      } else {
        res.status(404).json({ 
          success: false, 
          message: "Resume file not found" 
        });
      }
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to download resume" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
