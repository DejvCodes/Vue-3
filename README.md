# 📝 Vue 3 - Jobs
A modern and responsive Job Board Application built with Vue 3, Vue Router, Tailwind CSS and Axios. <br>
This app allows users to browse, add, edit and delete job listings with a beautiful gradient UI and smooth animations. 
All data is stored via JSON Server for a full CRUD experience.

## 🚀 Features 
• **Browse Jobs** – View all available job listings with modern card layouts and pagination. <br>
• **Job Details** – Detailed view of individual job postings with company information and location. <br>
• **Add Jobs** – Create new job listings with comprehensive forms including job type, salary, location and company details. <br>
• **Edit Jobs** – Update existing job postings with pre-filled forms. <br>
• **Delete Jobs** – Remove job listings with confirmation dialog. <br>
• **Responsive Design** – Beautiful UI with Tailwind CSS gradients, shadows and smooth animations. <br>
• **Toast Notifications** – Real-time user feedback for all CRUD operations. <br>
• **Loading States** – Animated spinner during data loading for better UX. <br>
• **404 Page** – Custom not found page with smooth animations and navigation. <br>
• **Active Navigation** – Highlighted active links with gradient styling. <br>

## 📚 Vue 3 Concepts Covered
**Fundamentals** <br>
• Options API – data() & Interpolation <br>
• Directives – v-if, v-else, v-else-if, v-for, v-bind, v-on, v-model <br>
• Components – Reusable component architecture <br>
• Props – Component communication <br>

**Composition API** <br>
• ref() – Reactive primitive values <br>
• reactive() – Reactive objects <br>
• computed() – Computed properties for derived state <br>
• onMounted() – Lifecycle hooks <br>

**Router & Navigation** <br>
• Vue Router – Client-side routing <br>
• RouterLink – Declarative navigation <br>
• Dynamic Routes – Parameterized routes <br>
• Active Links – Active link styling <br>

**Advanced Features** <br>
• Axios – HTTP requests for CRUD operations <br>
• Toast Notifications – User feedback system <br>
• Form Handling – Complex form state management <br>
• Conditional Rendering – Dynamic UI updates <br>

## 🎨 Design Features
• **Modern Gradients** – Beautiful color transitions throughout the app. <br>
• **Smooth Animations** – Hover effects, transitions and transforms. <br>
• **Card Shadows** – Elevated UI elements with shadow-xl. <br>
• **Responsive Layout** – Mobile-first design with Tailwind breakpoints. <br>
• **Focus States** – Enhanced accessibility with ring utilities. <br>

## 🏃🏻 How to Run this App
1. Clone the repository: <br>
   • `git clone https://github.com/DejvCodes/Vue-3.git` <br>
   • `cd Vue-3` <br>
2. Install dependencies: <br>
   • `npm install` <br>
3. Run the development server: <br>
   • `npm run dev` <br>
4. In a separate terminal, run the JSON server (for API): <br>
   • `npm run server` <br>

## 💻 Tech Stack
[![My Skills](https://skillicons.dev/icons?i=javascript,vue,tailwind,vite)](https://skillicons.dev)

## 📁 Project Structure
```
src/
├── components/     # Reusable Vue components (NavBar, Hero, JobListing, etc.)
├── views/          # Page-level components (HomeView, JobsView, AddJobView, etc.)
├── router/         # Vue Router configuration
├── jobs.json       # Mock API data for JSON Server
└── App.vue         # Root component 
```

## 🔐 License
[MIT License](LICENSE) 