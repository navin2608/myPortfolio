# Portfolio Website - Navin Kumar S

## Overview

This is a professional portfolio website for Navin Kumar S, a Front-end Developer with 4.5+ years of experience in the FinTech/Digital Banking domain. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a modern tech stack including TypeScript, Tailwind CSS, and shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **API Design**: RESTful API endpoints for contact form and file serving
- **Error Handling**: Centralized error handling middleware
- **Development**: Hot reload with Vite integration in development mode

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage for development/testing
- **Production Storage**: PostgreSQL with connection pooling

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password
- **Contact Messages Table**: Stores contact form submissions with timestamp
- **Schema Validation**: Zod schemas for type-safe data validation

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling to sections
- **Hero Section**: Portfolio introduction with gradient background and animations
- **About Section**: Professional summary with statistics and achievements
- **Projects Section**: Filterable project showcase with category-based filtering
- **Skills Section**: Interactive skills display with progress indicators and awards
- **Contact Section**: Form with validation for user inquiries
- **Footer**: Social links and contact information

### Backend Endpoints
- `POST /api/contact`: Contact form submission with validation
- `GET /api/contact-messages`: Retrieve contact messages (admin functionality)
- Static file serving for resume downloads and assets

## Data Flow

1. **Client-Side Rendering**: React components render the portfolio interface
2. **Form Submission**: Contact forms validate data using Zod schemas before submission
3. **API Communication**: TanStack React Query manages API calls with error handling
4. **Data Persistence**: Contact messages stored in PostgreSQL via Drizzle ORM
5. **Real-time Updates**: Query client invalidation for immediate UI updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm & drizzle-kit**: Modern TypeScript ORM and migration tool
- **@tanstack/react-query**: Server state management
- **@hookform/resolvers**: Form validation integration
- **zod**: Runtime type validation and schema validation

### UI Dependencies
- **@radix-ui/***: Unstyled accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Fast development server and build tool
- **typescript**: Type safety and development experience
- **tsx**: TypeScript execution for server development

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx with nodemon-like functionality for auto-reload
- **Database**: Development connection to Neon Database
- **Environment**: NODE_ENV=development with development-specific middleware

### Production Build
- **Frontend Build**: Vite production build with optimization
- **Backend Build**: esbuild bundling for Node.js deployment
- **Static Assets**: Compiled to dist/public directory
- **Server**: Express server serving both API and static files

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment specification (development/production)
- **Build Process**: Unified build script for frontend and backend

### Deployment Considerations
- Single-server deployment with Express serving both API and static files
- Database migrations handled via Drizzle Kit
- Environment variables required for database connectivity
- Static file serving optimized for production with proper caching headers