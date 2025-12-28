<template>
  <div class="home-page">
    <!-- Animated Background -->
    <div class="animated-background">
      <div class="grid-overlay"></div>
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="floating-code">
        <div class="code-line" v-for="i in 20" :key="i" :style="getCodeLineStyle(i)">
          {{ getCodeSnippet(i) }}
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="hero-section">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="10" lg="8" class="text-center">
            <div class="hero-content">
              <h1 class="hero-title space-grotesk fade-in-up">
                Transform Your Ideas Into
                <span class="gradient-text"> Digital Reality</span>
              </h1>
              <p class="hero-subtitle fade-in-up delay-1">
                Custom web solutions that power your business - from simple websites to complex applications
              </p>
              <div class="hero-buttons fade-in-up delay-2">
                <v-btn
                  size="x-large"
                  color="primary"
                  variant="elevated"
                  class="pulse-btn"
                  @click="scrollToSection('services')"
                >
                  <v-icon start>mdi-rocket-launch</v-icon>
                  Explore Services
                </v-btn>
                <v-btn
                  size="x-large"
                  variant="outlined"
                  color="primary"
                  class="ml-4"
                  @click="scrollToSection('contact')"
                >
                  <v-icon start>mdi-email</v-icon>
                  Get In Touch
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      
      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <v-icon class="bounce" color="primary">mdi-chevron-down</v-icon>
      </div>
    </section>

    <!-- Services Overview -->
    <section id="services" class="services-overview">
      <v-container>
        <div class="section-header text-center mb-16">
          <h2 class="section-title space-grotesk">What I Build</h2>
          <p class="section-subtitle">Professional solutions tailored to your needs</p>
        </div>

        <v-row>
          <v-col cols="12" md="6" v-for="(service, index) in mainServices" :key="index">
            <v-card
              class="service-card hover-lift"
              :class="`slide-in-${index % 2 === 0 ? 'left' : 'right'}`"
              elevation="8"
            >
              <div class="card-glow"></div>
              <v-card-text class="pa-8">
                <div class="service-icon mb-4">
                  <v-icon :color="service.color" size="64">{{ service.icon }}</v-icon>
                </div>
                <h3 class="service-title space-grotesk mb-4">{{ service.title }}</h3>
                <p class="service-description mb-6">{{ service.description }}</p>
                <v-btn
                  :color="service.color"
                  variant="tonal"
                  @click="scrollToSection(service.sectionId)"
                >
                  View Examples
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Simple Websites Section -->
    <section id="simple-websites" class="websites-section">
      <v-container>
        <div class="section-header text-center mb-12">
          <v-chip color="primary" variant="flat" size="large" class="mb-4">
            <v-icon start>mdi-web</v-icon>
            Category 1
          </v-chip>
          <h2 class="section-title space-grotesk">Simple Websites</h2>
          <p class="section-subtitle">Your Digital Brochure - Professional & Affordable</p>
        </div>

        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(example, index) in websiteExamples"
            :key="index"
          >
            <v-card
              class="example-card stagger-fade-in"
              :style="{ animationDelay: `${index * 0.1}s` }"
              elevation="4"
            >
              <div class="card-icon-wrapper" :style="{ background: example.gradient }">
                <v-icon color="white" size="48">{{ example.icon }}</v-icon>
              </div>
              <v-card-text class="pa-6">
                <h4 class="example-title mb-2">{{ example.title }}</h4>
                <p class="example-description">{{ example.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Web Applications Section -->
    <section id="web-applications" class="applications-section">
      <v-container>
        <div class="section-header text-center mb-12">
          <v-chip color="accent" variant="flat" size="large" class="mb-4">
            <v-icon start>mdi-application-cog</v-icon>
            Category 2
          </v-chip>
          <h2 class="section-title space-grotesk">Working Web Applications</h2>
          <p class="section-subtitle">Tools That Run Your Business</p>
        </div>

        <v-row>
          <v-col
            cols="12"
            md="6"
            v-for="(app, index) in applicationExamples"
            :key="index"
          >
            <v-card
              class="application-card hover-lift stagger-fade-in"
              :style="{ animationDelay: `${index * 0.15}s` }"
              elevation="6"
            >
              <v-card-text class="pa-8">
                <div class="d-flex align-center mb-4">
                  <div class="app-icon-box mr-4">
                    <v-icon color="accent" size="40">{{ app.icon }}</v-icon>
                  </div>
                  <h3 class="app-title space-grotesk">{{ app.title }}</h3>
                </div>
                <p class="app-description mb-4">{{ app.description }}</p>
                <v-chip-group>
                  <v-chip
                    v-for="(feature, fIndex) in app.features"
                    :key="fIndex"
                    size="small"
                    color="accent"
                    variant="outlined"
                  >
                    {{ feature }}
                  </v-chip>
                </v-chip-group>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Custom Solutions Section -->
    <section class="custom-section">
      <v-container>
        <v-card class="custom-card" elevation="12">
          <v-card-text class="pa-12 text-center">
            <v-icon color="primary" size="80" class="mb-6 rotate-scale">mdi-puzzle</v-icon>
            <h2 class="custom-title space-grotesk mb-6">
              Custom Programs Built for Your Unique Needs
            </h2>
            <p class="custom-description mb-8">
              You explain the problem. I build the tool.<br />
              Whether it's a unique workflow, data processing system, or specialized business tool,
              I create solutions that fit perfectly.
            </p>
            <v-divider class="mb-8"></v-divider>
            <div class="features-grid">
              <div v-for="(feature, index) in customFeatures" :key="index" class="feature-item">
                <v-icon color="primary" size="32" class="mb-2">{{ feature.icon }}</v-icon>
                <h4 class="feature-name">{{ feature.name }}</h4>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section">
      <v-container>
        <div class="section-header text-center mb-12">
          <h2 class="section-title space-grotesk">All-Inclusive Monthly Service</h2>
          <p class="section-subtitle">Everything you need, one simple fee</p>
        </div>

        <v-row justify="center">
          <v-col cols="12" md="8" lg="6">
            <v-card class="pricing-card" elevation="12">
              <div class="pricing-badge">
                <v-chip color="primary" size="large" variant="flat">
                  <v-icon start>mdi-star</v-icon>
                  All-Inclusive
                </v-chip>
              </div>
              <v-card-text class="pa-10">
                <h3 class="pricing-title space-grotesk text-center mb-8">
                  Monthly Fee Covers Everything
                </h3>
                <v-list class="pricing-features">
                  <v-list-item v-for="(item, index) in pricingFeatures" :key="index" class="px-0">
                    <template v-slot:prepend>
                      <v-icon color="primary" size="28">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title class="text-h6">{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Contact/CTA Section -->
    <section id="contact" class="contact-section">
      <v-container>
        <v-card class="contact-card" elevation="20">
          <v-card-text class="pa-12 text-center">
            <h2 class="contact-title space-grotesk mb-6">
              Let's Discuss What You Need
            </h2>
            <p class="contact-description mb-8">
              Ready to bring your project to life? Whether you need a simple website or a complex application,
              I'm here to help. Let's talk about your vision and create something amazing together.
            </p>
            <v-btn
              size="x-large"
              color="primary"
              variant="elevated"
              class="pulse-btn"
              href="mailto:contact@yoursite.com"
            >
              <v-icon start>mdi-email</v-icon>
              Start a Conversation
            </v-btn>
          </v-card-text>
        </v-card>
      </v-container>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <v-container>
        <div class="text-center">
          <p class="footer-text">
            © {{ new Date().getFullYear() }} Web Development Services. Built with passion and precision.
          </p>
        </div>
      </v-container>
    </footer>
  </div>
</template>

<script setup lang="ts">
const mainServices = [
  {
    title: 'Simple Websites',
    description: 'Professional digital brochures perfect for small businesses, freelancers, and organizations. Clean, fast, and effective.',
    icon: 'mdi-web',
    color: 'primary',
    sectionId: 'simple-websites'
  },
  {
    title: 'Web Applications',
    description: 'Powerful tools that streamline your operations. From booking systems to inventory management - built for your success.',
    icon: 'mdi-application-cog',
    color: 'accent',
    sectionId: 'web-applications'
  }
]

const websiteExamples = [
  {
    title: 'Professional Services',
    description: 'A 5-page site for a plumber, lawyer, or consultant',
    icon: 'mdi-briefcase',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    title: 'Restaurant Website',
    description: 'Beautiful menu display with contact info and location',
    icon: 'mdi-silverware-fork-knife',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    title: 'Portfolio Site',
    description: 'Showcase for photographers, artists, and creatives',
    icon: 'mdi-camera',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    title: 'Community Groups',
    description: 'Homepage for local clubs and community organizations',
    icon: 'mdi-account-group',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    title: 'Business Card',
    description: 'Digital presence for freelancers and entrepreneurs',
    icon: 'mdi-card-account-details',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    title: 'Landing Pages',
    description: 'High-converting pages for campaigns and promotions',
    icon: 'mdi-rocket-launch',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
  }
]

const applicationExamples = [
  {
    title: 'Booking Systems',
    description: 'Manage appointments, rentals, or class schedules with ease. Automated reminders and calendar integration.',
    icon: 'mdi-calendar-check',
    features: ['Online Booking', 'Reminders', 'Payment Integration']
  },
  {
    title: 'Stock Control Systems',
    description: 'Track inventory, monitor sales, and generate reports in real-time. Perfect for retail and warehouses.',
    icon: 'mdi-package-variant',
    features: ['Inventory Tracking', 'Sales Reports', 'Low Stock Alerts']
  },
  {
    title: 'Reporting Dashboards',
    description: 'Visualize your business data with interactive charts and real-time insights. Make informed decisions faster.',
    icon: 'mdi-chart-line',
    features: ['Real-time Data', 'Custom Charts', 'Export Reports']
  },
  {
    title: 'Data Entry Applications',
    description: 'Streamlined forms and databases for managing client info, products, or any business data efficiently.',
    icon: 'mdi-database-edit',
    features: ['Custom Forms', 'Data Validation', 'Search & Filter']
  }
]

const customFeatures = [
  { name: 'Hosting', icon: 'mdi-server' },
  { name: 'Security', icon: 'mdi-shield-check' },
  { name: 'Backups', icon: 'mdi-backup-restore' },
  { name: 'Maintenance', icon: 'mdi-wrench' },
  { name: '24/7 Support', icon: 'mdi-headset' },
  { name: 'Updates', icon: 'mdi-update' }
]

const pricingFeatures = [
  'Reliable Hosting Infrastructure',
  'Enterprise-Level Security',
  'Automated Daily Backups',
  'Ongoing Maintenance & Updates',
  'Technical Support',
  'Performance Monitoring'
]

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const getCodeSnippet = (index: number) => {
  const snippets = [
    'const build = () => amazing();',
    'function create() { return magic; }',
    'if (idea) { makeitReal(); }',
    'class Solution extends Perfect {}',
    'async await yourSuccess();',
    'export default Excellence;',
    'import Innovation from "future";',
    'const result = transform(data);',
    'return { success: true };',
    'render(<YourDreams />);'
  ]
  return snippets[index % snippets.length]
}

const getCodeLineStyle = (index: number) => {
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${index * 0.3}s`,
    animationDuration: `${15 + Math.random() * 10}s`
  }
}
</script>

<style scoped>
.home-page {
  position: relative;
  min-height: 100vh;
}

/* Animated Background */
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #0A0E27 0%, #1A1F3A 50%, #0A0E27 100%);
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #00D9FF, transparent);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #7B2CBF, transparent);
  top: 50%;
  right: 10%;
  animation-delay: 5s;
}

.orb-3 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, #FF006E, transparent);
  bottom: 10%;
  left: 40%;
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(100px, -100px) scale(1.1); }
  66% { transform: translate(-100px, 100px) scale(0.9); }
}

.floating-code {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.code-line {
  position: absolute;
  color: rgba(0, 217, 255, 0.2);
  font-family: 'Courier New', monospace;
  font-size: 14px;
  white-space: nowrap;
  animation: floatCode 25s linear infinite;
}

@keyframes floatCode {
  0% { transform: translateY(0) translateX(0); opacity: 0; }
  10% { opacity: 0.3; }
  90% { opacity: 0.3; }
  100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.hero-content {
  padding: 40px 0;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
  color: white;
}

.gradient-text {
  background: linear-gradient(135deg, #00D9FF 0%, #7B2CBF 50%, #FF006E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 5s ease infinite;
  background-size: 200% 200%;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
}

/* Sections */
section {
  position: relative;
  z-index: 1;
  padding: 100px 0;
}

.section-header {
  margin-bottom: 60px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.6);
}

/* Service Cards */
.service-card {
  position: relative;
  background: rgba(26, 31, 58, 0.8) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 217, 255, 0.2);
  border-radius: 20px !important;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(123, 44, 191, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.4s;
}

.service-card:hover::before {
  opacity: 1;
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 217, 255, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s;
}

.service-card:hover .card-glow {
  opacity: 1;
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hover-lift {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s;
}

.hover-lift:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 217, 255, 0.3) !important;
}

.service-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
}

.service-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* Example Cards */
.example-card {
  background: rgba(26, 31, 58, 0.6) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 217, 255, 0.15);
  border-radius: 16px !important;
  transition: all 0.3s ease;
  height: 100%;
}

.example-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 217, 255, 0.4);
}

.card-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  position: relative;
  overflow: hidden;
}

.card-icon-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 0%, rgba(10, 14, 39, 0.5) 100%);
}

.example-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
}

.example-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

/* Application Cards */
.application-card {
  background: rgba(26, 31, 58, 0.7) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 0, 110, 0.2);
  border-radius: 20px !important;
  height: 100%;
}

.application-card:hover {
  border-color: rgba(255, 0, 110, 0.5);
}

.app-icon-box {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 0, 110, 0.1);
  border-radius: 12px;
}

.app-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.app-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* Custom Section */
.custom-card {
  background: linear-gradient(135deg, rgba(26, 31, 58, 0.9) 0%, rgba(42, 47, 74, 0.9) 100%) !important;
  backdrop-filter: blur(20px);
  border: 2px solid rgba(0, 217, 255, 0.3);
  border-radius: 24px !important;
}

.custom-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
}

.custom-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 32px;
  margin-top: 32px;
}

.feature-item {
  text-align: center;
}

.feature-name {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-top: 8px;
}

/* Pricing Section */
.pricing-card {
  background: linear-gradient(135deg, rgba(26, 31, 58, 0.95) 0%, rgba(42, 47, 74, 0.95) 100%) !important;
  backdrop-filter: blur(20px);
  border: 2px solid rgba(0, 217, 255, 0.3);
  border-radius: 24px !important;
  position: relative;
  overflow: visible;
}

.pricing-badge {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.pricing-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
}

.pricing-features {
  background: transparent !important;
}

/* Contact Section */
.contact-card {
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.15) 0%, rgba(123, 44, 191, 0.15) 100%) !important;
  backdrop-filter: blur(20px);
  border: 2px solid rgba(0, 217, 255, 0.4);
  border-radius: 24px !important;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
}

.contact-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

/* Footer */
.footer {
  padding: 40px 0;
  background: rgba(10, 14, 39, 0.8);
  border-top: 1px solid rgba(0, 217, 255, 0.2);
}

.footer-text {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
}

/* Animations */
.fade-in-up {
  animation: fadeInUp 1s ease-out;
}

.delay-1 {
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.delay-2 {
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

.slide-in-right {
  animation: slideInRight 0.8s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.stagger-fade-in {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.pulse-btn {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 217, 255, 0.7); }
  50% { box-shadow: 0 0 20px 10px rgba(0, 217, 255, 0); }
}

.rotate-scale {
  animation: rotateScale 3s ease-in-out infinite;
}

@keyframes rotateScale {
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
}

/* Responsive */
@media (max-width: 960px) {
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-buttons .v-btn {
    margin-left: 0 !important;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  section {
    padding: 60px 0;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
</style>
