<template>
  <div class="home-page">
    <!-- Minimal Navigation Indicator -->
    <div class="navigation-indicator" :class="{ 'nav-hidden': !showNav }">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ height: progressPercentage + '%' }"></div>
      </div>
      <div class="nav-dots">
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="nav-dot"
          :class="{ active: index === currentSection }"
          @click="navigateToSection(index)"
          :title="section.title"
        >
          <span class="dot-tooltip">{{ section.title }}</span>
        </div>
      </div>
    </div>

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

    <!-- Sections Container -->
    <div class="sections-container">
      <div class="section-wrapper">

      <!-- Hero Section -->
      <section id="hero" class="hero-section section-page">
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
                  @click="navigateToSection(1)"
                >
                  <v-icon start>mdi-rocket-launch</v-icon>
                  Explore Services
                </v-btn>
                <v-btn
                  size="x-large"
                  variant="outlined"
                  color="primary"
                  class="ml-4"
                  @click="openContactDialog"
                >
                  <v-icon start>mdi-email</v-icon>
                  Get In Touch
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

      <!-- Services Overview -->
      <section id="services" class="services-overview section-page">
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
                  @click="navigateToSection(service.sectionIndex)"
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
      <section id="simple-websites" class="websites-section section-page">
      <v-container>
        <div class="section-header text-center mb-12">
          <v-chip color="primary" variant="flat" size="large" class="mb-4">
            <v-icon start>mdi-web</v-icon>
            Category 1
          </v-chip>
          <h2 class="section-title space-grotesk">Simple Websites</h2>
          <p class="section-subtitle">Your Digital Website - Professional & Affordable</p>
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
      <section id="web-applications" class="applications-section section-page">
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
      <section id="custom" class="custom-section section-page">
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
      <section id="pricing" class="pricing-section section-page">
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
      <section id="contact" class="contact-section section-page">
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
              @click="openContactDialog"
            >
              <v-icon start>mdi-email</v-icon>
              Start a Conversation
            </v-btn>
          </v-card-text>
        </v-card>
      </v-container>
    </section>

      <!-- Footer -->
      <footer id="footer" class="footer section-page">
      <v-container>
        <div class="text-center">
          <p class="footer-text">
            © {{ new Date().getFullYear() }} Web Development Services. Built with passion and precision.
          </p>
        </div>
      </v-container>
      </footer>
    </div>
    </div>

    <!-- Contact Dialog -->
    <v-dialog v-model="showContactDialog" max-width="600" persistent>
      <v-card class="contact-dialog-card">
        <v-card-title class="text-h5 space-grotesk pa-6">
          <v-icon color="primary" class="mr-2">mdi-account-box</v-icon>
          Get In Touch
          <v-spacer></v-spacer>
          <v-btn icon variant="text" @click="closeContactDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        
        <v-card-text class="pa-6">
          <v-tabs v-model="contactTab" color="primary" class="mb-6">
            <v-tab value="email">
              <v-icon start>mdi-email</v-icon>
              Email
            </v-tab>
            <v-tab value="whatsapp">
              <v-icon start>mdi-whatsapp</v-icon>
              WhatsApp
            </v-tab>
          </v-tabs>

          <v-window v-model="contactTab">
            <!-- Email Tab -->
            <v-window-item value="email">
              <v-form ref="contactForm" v-model="formValid">
                <v-text-field
                  v-model="contactFormData.name"
                  label="Your Name"
                  prepend-inner-icon="mdi-account"
                  variant="outlined"
                  :rules="[rules.required]"
                  class="mb-4"
                ></v-text-field>

                <v-text-field
                  v-model="contactFormData.email"
                  label="Your Email Address (Optional)"
                  prepend-inner-icon="mdi-email"
                  variant="outlined"
                  type="email"
                  :rules="[rules.emailOrPhone, rules.emailFormat]"
                  class="mb-4"
                ></v-text-field>

                <v-text-field
                  v-model="contactFormData.phone"
                  label="Your Phone Number (Optional)"
                  prepend-inner-icon="mdi-phone"
                  variant="outlined"
                  :rules="[rules.emailOrPhone]"
                  class="mb-4"
                ></v-text-field>

                <v-textarea
                  v-model="contactFormData.message"
                  label="Your Message"
                  prepend-inner-icon="mdi-message-text"
                  variant="outlined"
                  rows="5"
                  :rules="[rules.required]"
                  class="mb-4"
                ></v-textarea>

                <v-alert v-if="sendStatus !== 'idle'" :type="sendStatus === 'success' ? 'success' : 'error'" variant="tonal" class="mb-4">
                  {{ statusMessage }}
                </v-alert>

                <v-btn
                  color="primary"
                  size="large"
                  block
                  @click="sendEmail"
                  :disabled="!formValid || isSending"
                  :loading="isSending"
                >
                  <v-icon start>mdi-send</v-icon>
                  {{ isSending ? 'Sending...' : 'Send Email' }}
                </v-btn>
              </v-form>
            </v-window-item>

            <!-- WhatsApp Tab -->
            <v-window-item value="whatsapp">
              <div class="text-center py-8">
                <v-icon color="success" size="80" class="mb-4">mdi-whatsapp</v-icon>
                <h3 class="text-h6 mb-4">Contact via WhatsApp</h3>
                <p class="text-body-1 mb-6">
                  Click the button below to start a conversation on WhatsApp.
                  We'll get back to you as soon as possible!
                </p>
                <v-btn
                  color="success"
                  size="x-large"
                  :href="whatsappLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon start>mdi-whatsapp</v-icon>
                  Open WhatsApp
                </v-btn>
              </div>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

// SEO Meta Tags
useSeoMeta({
  title: 'Custom Web Development Solutions | Transform Your Ideas Into Digital Reality',
  description: 'Professional custom web development services. From simple websites to complex applications - I build digital solutions that power your business.',
  ogTitle: 'Custom Web Development Solutions | Transform Your Ideas Into Digital Reality',
  ogDescription: 'Professional custom web development services. From simple websites to complex applications - I build digital solutions that power your business.',
  ogImage: 'https://developmentspike.co.za/og-image.png?v=20251228',
  ogImageSecureUrl: 'https://developmentspike.co.za/og-image.png?v=20251228',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageAlt: 'Custom Web Development Solutions',
  ogImageType: 'image/png',
  ogUrl: 'https://developmentspike.co.za',
  ogType: 'website',
  ogSiteName: 'Development Spike',
  ogLocale: 'en_ZA',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Custom Web Development Solutions | Transform Your Ideas Into Digital Reality',
  twitterDescription: 'Professional custom web development services. From simple websites to complex applications - I build digital solutions that power your business.',
  twitterImage: 'https://developmentspike.co.za/og-image.png?v=20251228',
  twitterImageAlt: 'Custom Web Development Solutions',
})

const currentSection = ref(0)
const isNavigating = ref(false)
const showNav = ref(true)
const isMobile = ref(false)
const showContactDialog = ref(false)
const contactTab = ref('email')
const formValid = ref(false)
const contactForm = ref(null)
const isSending = ref(false)
const sendStatus = ref<'idle' | 'success' | 'error'>('idle')
const statusMessage = ref('')
let navTimeout: NodeJS.Timeout | null = null

const contactFormData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const rules = {
  required: (value: string) => !!value || 'This field is required',
  emailOrPhone: () => {
    const hasEmail = !!contactFormData.value.email
    const hasPhone = !!contactFormData.value.phone
    return hasEmail || hasPhone || 'Please provide at least an email address or phone number'
  },
  emailFormat: (value: string) => {
    if (!value) return true // Optional field
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(value) || 'Invalid email address'
  }
}

const whatsappLink = computed(() => {
  const phone = '0609605216' // Replace with actual WhatsApp number
  const message = encodeURIComponent('Hi! I\'m interested in your web development services.')
  return `https://wa.me/${phone}?text=${message}`
})

const openContactDialog = () => {
  showContactDialog.value = true
  contactTab.value = 'email'
}

const closeContactDialog = () => {
  showContactDialog.value = false
  // Reset form
  contactFormData.value = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
  sendStatus.value = 'idle'
  statusMessage.value = ''
  if (contactForm.value) {
    (contactForm.value as any).reset()
  }
}

const sendEmail = async () => {
  if (!formValid.value || isSending.value) return
  
  isSending.value = true
  sendStatus.value = 'idle'
  statusMessage.value = ''
  
  try {
    const response = await $fetch('/api/send-email', {
      method: 'POST',
      body: {
        name: contactFormData.value.name,
        email: contactFormData.value.email,
        phone: contactFormData.value.phone,
        message: contactFormData.value.message
      }
    })
    
    if (response.success) {
      sendStatus.value = 'success'
      statusMessage.value = 'Message sent successfully! We\'ll get back to you soon.'
      
      // Close dialog after showing success message
      setTimeout(() => {
        closeContactDialog()
      }, 2000)
    } else {
      sendStatus.value = 'error'
      statusMessage.value = response.error || 'Failed to send message. Please try again.'
    }
  } catch (error: any) {
    console.error('Email send error:', error)
    sendStatus.value = 'error'
    statusMessage.value = 'Failed to send message. Please try WhatsApp or try again later.'
  } finally {
    isSending.value = false
  }
}

const progressPercentage = computed(() => {
  return (currentSection.value / (sections.length - 1)) * 100
})

const sections = [
  { title: 'Home', id: 'hero' },
  { title: 'Services', id: 'services' },
  { title: 'Simple Websites', id: 'simple-websites' },
  { title: 'Web Applications', id: 'web-applications' },
  { title: 'Custom Solutions', id: 'custom' },
  { title: 'Pricing', id: 'pricing' },
  { title: 'Contact', id: 'contact' },
  { title: 'Footer', id: 'footer' }
]

const navigateSection = (direction: number) => {
  if (isNavigating.value) return
  
  const newSection = currentSection.value + direction
  if (newSection >= 0 && newSection < sections.length) {
    isNavigating.value = true
    currentSection.value = newSection
    setTimeout(() => {
      isNavigating.value = false
    }, 800)
  }
}

const navigateToSection = (index: number) => {
  if (isNavigating.value) return
  isNavigating.value = true
  currentSection.value = index
  
  // Scroll to the section smoothly
  const sectionId = sections[index].id
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  
  setTimeout(() => {
    isNavigating.value = false
  }, 800)
}

const updateCurrentSection = () => {
  // Update current section based on scroll position
  const scrollPosition = window.scrollY + window.innerHeight / 2
  
  sections.forEach((section, index) => {
    const element = document.getElementById(section.id)
    if (element) {
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + window.scrollY
      const elementBottom = elementTop + rect.height
      
      if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
        currentSection.value = index
      }
    }
  })
}

const resetNavTimeout = () => {
  showNav.value = true
  // Don't auto-hide on mobile/touch devices
  if (isMobile.value) return
  
  if (navTimeout) clearTimeout(navTimeout)
  navTimeout = setTimeout(() => {
    showNav.value = false
  }, 3000)
}

const handleMouseMove = () => {
  resetNavTimeout()
}

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 600 || 'ontouchstart' in window
  if (isMobile.value) {
    showNav.value = true // Always show nav on mobile
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowDown' || event.key === 'PageDown') {
    event.preventDefault()
    navigateSection(1)
  } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
    event.preventDefault()
    navigateSection(-1)
  } else if (event.key === 'Home') {
    event.preventDefault()
    navigateToSection(0)
  } else if (event.key === 'End') {
    event.preventDefault()
    navigateToSection(sections.length - 1)
  }
}

const handleScroll = () => {
  updateCurrentSection()
  resetNavTimeout()
}

onMounted(() => {
  checkIfMobile()
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  window.addEventListener('resize', checkIfMobile)
  resetNavTimeout()
  updateCurrentSection()
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', checkIfMobile)
  if (navTimeout) clearTimeout(navTimeout)
})

const mainServices = [
  {
    title: 'Simple Websites',
    description: 'Professional digital websites, perfect for small businesses, freelancers, and organizations. Clean, fast, and effective.',
    icon: 'mdi-web',
    color: 'primary',
    sectionId: 'simple-websites',
    sectionIndex: 2
  },
  {
    title: 'Web Applications',
    description: 'Powerful tools that streamline your operations. From booking systems to inventory management , reporting dashboards and data entry applications etc  - built for your success.',
    icon: 'mdi-application-cog',
    color: 'accent',
    sectionId: 'web-applications',
    sectionIndex: 3
  }
]

const websiteExamples = [
  {
    title: 'Professional Services',
    description: 'Showcase your expertise with a polished, multi-page presence',
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
    features: ['Online Booking', 'Reminders']
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
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* Minimal Navigation Indicator */
.navigation-indicator {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 16px;
  opacity: 1;
  transition: opacity 0.5s ease;
}

.navigation-indicator.nav-hidden {
  opacity: 0;
  pointer-events: none;
}

.progress-bar {
  width: 2px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.progress-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, #00D9FF, #7B2CBF);
  transition: height 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
}

.nav-dots {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.nav-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.nav-dot:hover {
  background: rgba(0, 217, 255, 0.6);
  transform: scale(1.4);
}

.nav-dot:hover .dot-tooltip {
  opacity: 1;
  transform: translateX(-10px);
}

.nav-dot.active {
  background: #00D9FF;
  box-shadow: 0 0 12px rgba(0, 217, 255, 0.8);
  transform: scale(1.6);
}

.dot-tooltip {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%) translateX(0);
  background: rgba(10, 14, 39, 0.95);
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 217, 255, 0.3);
}

/* Sections Container */
.sections-container {
  position: relative;
  overflow: visible;
}

.section-wrapper {
  /* No transform needed - free scrolling enabled */
}

.section-page {
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;
  overflow-y: visible;
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

/* Sections */
section {
  position: relative;
  z-index: 1;
  padding: 60px 0;
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

/* Contact Dialog */
.contact-dialog-card {
  background: linear-gradient(135deg, rgba(26, 31, 58, 0.98) 0%, rgba(42, 47, 74, 0.98) 100%) !important;
  backdrop-filter: blur(20px);
  border: 2px solid rgba(0, 217, 255, 0.3);
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
  .navigation-indicator {
    right: 20px;
  }

  .progress-bar {
    height: 150px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-buttons .v-btn {
    margin-left: 0 !important;
    width: 100%;
    max-width: 300px;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .service-card {
    margin-bottom: 20px;
  }

  .section-header {
    margin-bottom: 40px;
  }
}

@media (max-width: 600px) {
  /* Hide navigation on mobile - users scroll freely */
  .navigation-indicator {
    display: none !important;
  }

  /* Allow scrolling on mobile */
  .home-page {
    overflow-y: auto;
    overflow-x: hidden;
  }

  .sections-container {
    overflow: visible;
  }

  .section-wrapper {
    transform: none !important;
  }

  .section-page {
    height: auto;
    min-height: 100vh;
    overflow-y: visible;
  }

  /* Adjust section padding for mobile */
  section {
    padding: 30px 0;
  }

  .section-page {
    padding: 20px 0;
  }

  /* Hero section mobile */
  .hero-content {
    padding: 20px 0;
  }

  .hero-title {
    font-size: 2rem !important;
    margin-bottom: 16px;
  }

  .hero-subtitle {
    font-size: 1rem !important;
    margin-bottom: 30px;
  }

  .hero-buttons {
    gap: 12px;
  }

  .hero-buttons .v-btn {
    font-size: 0.95rem;
  }

  /* Section headers mobile */
  .section-header {
    margin-bottom: 30px;
  }

  .section-title {
    font-size: 1.75rem !important;
  }

  .section-subtitle {
    font-size: 0.95rem !important;
  }

  /* Cards mobile */
  .service-card {
    margin-bottom: 16px;
  }

  .service-card .pa-8 {
    padding: 24px !important;
  }

  .service-title {
    font-size: 1.4rem !important;
  }

  .service-description {
    font-size: 0.9rem;
  }

  .example-card .pa-6 {
    padding: 16px !important;
  }

  .example-title {
    font-size: 1.1rem !important;
  }

  .example-description {
    font-size: 0.85rem;
  }

  .card-icon-wrapper {
    height: 100px;
  }

  .application-card .pa-8 {
    padding: 24px !important;
  }

  .app-title {
    font-size: 1.3rem !important;
  }

  .app-description {
    font-size: 0.9rem;
  }

  .app-icon-box {
    width: 56px;
    height: 56px;
  }

  /* Custom section mobile */
  .custom-card .pa-12 {
    padding: 32px 24px !important;
  }

  .custom-title {
    font-size: 1.6rem !important;
  }

  .custom-description {
    font-size: 1rem !important;
  }

  .features-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .feature-name {
    font-size: 0.85rem;
  }

  /* Pricing section mobile */
  .pricing-card .pa-10 {
    padding: 32px 24px !important;
  }

  .pricing-title {
    font-size: 1.5rem !important;
  }

  .pricing-features .text-h6 {
    font-size: 0.95rem !important;
  }

  /* Contact section mobile */
  .contact-card .pa-12 {
    padding: 32px 24px !important;
  }

  .contact-title {
    font-size: 1.8rem !important;
  }

  .contact-description {
    font-size: 1rem !important;
  }

  /* Footer mobile */
  .footer {
    padding: 30px 0;
  }

  .footer-text {
    font-size: 0.8rem;
  }

  /* Reduce animations on mobile for performance */
  .gradient-orb {
    opacity: 0.2;
  }

  .floating-code {
    display: none;
  }

  /* Better spacing for mobile */
  .v-container {
    padding: 0 16px !important;
  }
}

/* Extra small devices */
@media (max-width: 400px) {
  .navigation-indicator {
    bottom: 10px;
    padding: 8px 16px;
    gap: 10px;
  }

  .progress-bar {
    width: 80px;
  }

  .nav-dots {
    gap: 8px;
  }

  .nav-dot {
    width: 6px;
    height: 6px;
  }

  .hero-title {
    font-size: 1.75rem !important;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .v-container {
    padding: 0 12px !important;
  }
}
</style>
