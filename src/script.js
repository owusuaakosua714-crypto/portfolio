document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Toggle ---
    const menuToggle = document.querySelector('.home-page-scoped .mobile-menu-toggle');
    const mainNav = document.querySelector('.home-page-scoped .main-nav');
    
    if(menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Toggle hamburger / close icon
            const icon = menuToggle.querySelector('i');
            if(mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Scroll to Top Functionality ---
    const scrollBtn = document.getElementById('scrollToTopBtn');
    
    if(scrollBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.visibility = 'visible';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.visibility = 'hidden';
            }
        });
        
        // Initial state for smooth fade-in later
        scrollBtn.style.opacity = '0';
        scrollBtn.style.visibility = 'hidden';
        scrollBtn.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';

        // Scroll action
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Hamburger Menu Toggle ---
    const menuToggle = document.querySelector('.about-page .mobile-menu-toggle');
    const mainNav = document.querySelector('.about-page .main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');

            // Toggle icon between hamburger and close cross icon
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (mainNav.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // --- 2. Back-to-Top Smooth Scroll Handler ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- 3. Dynamic Interactive Card Opacity & Hover Handler ---
    const interactiveCards = document.querySelectorAll('.about-page .skill-card, .about-page .value-card');

    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.opacity = '0.85';
        });

        card.addEventListener('mouseleave', () => {
            card.style.opacity = '1';
        });
    });
});

/* ==========================================================================
   PROJECTS PAGE ISOLATED SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Page isolation guard: Only run if we are on projects.html
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  // ------------------------------------------------------------------------
  // 1. PROJECT DATA STORE
  // ------------------------------------------------------------------------
  const projectsData = [
    {
      id: "1",
      title: "Bloom with PMOS",
      category: "Website",
      badgeClass: "badge-green",
      image: "../images/logo.jpeg",
      description: "An educational platform providing African women with accessible information and resources about PMOS.",
      tech: ["HTML", "CSS", "JavaScript", "Figma"],
      learned: "Practiced accessibility standards, CSS Grid layout techniques, and DOM manipulation to show dynamic information.",
      // COMMENT: Insert your actual links below
      liveUrl: "https://owusuaakosua714-crypto.github.io/PMOS/",
      githubUrl: "https://github.com/owusuaakosua714-crypto/PMOS.git"
    },
    {
      id: "2",
      title: "Bakery Website",
      category: "Website",
      badgeClass: "badge-green",
      image: "../images/bakery.png",
      description: "A responsive website for a local bakery business to showcase products and take online customer orders.",
      tech: ["HTML", "CSS", "JavaScript"],
      learned: "Focused on responsive mobile navigation, image optimization, and structured form layout techniques.",
      // COMMENT: Insert your actual links below
      liveUrl: "https://owusuaakosua714-crypto.github.io/bakery/",
      githubUrl: "https://github.com/owusuaakosua714-crypto/bakery.git"
    },
    {
      id: "3",
      title: "Game Project",
      category: "Game",
      badgeClass: "badge-purple",
      image: "../images/game.png",
      description: "An arcade-style space runner game built with JavaScript where players dodge obstacles and score points.",
      tech: ["HTML", "CSS", "JavaScript"],
      learned: "Mastered JavaScript event loops, collision detection logic, dynamic rendering, and keypress detection.",
      // COMMENT: Insert your actual links below
      playUrl: "https://owusuaakosua714-crypto.github.io/practiseAgenticAI/",
    },
    {
      id: "4",
      title: "Bloom with PMOS UI Design",
      category: "Design",
      badgeClass: "badge-orange",
      image: "../images/figma mockup.png",
      description: "UI/UX wireframes and prototype design for the Bloom with PMOS platform created in Figma.",
      tech: ["Figma"],
      learned: "Learned mobile-first UI layout principles, color contrast accessibility, and interactive Figma component prototyping.",
      
      figmaUrl: "https://www.figma.com/design/oziJmg3t8Zljzw7hj52TDS/PROJECT-WORK?node-id=0-1&p=f&t=wkl8XscicmTk4phk-0"
    },
    {
      id: "5",
      title: "T4G CV Website",
      category: "Website",
      badgeClass: "badge-green",
      image: "../images/cv.png",
      description: "A personal CV website created to showcase my skills, education, work experience, and developer projects.",
      tech: ["HTML", "CSS", "JavaScript"],
      learned: "Improved semantically structured HTML layout skills and dynamic content rendering.",
      // COMMENT: Insert your actual links below
      liveUrl: "https://owusuaakosua714-crypto.github.io/T4G_CV/",
    },
    {
      id: "6",
      title: "T4G Flexbox Project",
      category: "Other / HTML & CSS",
      badgeClass: "badge-gold",
      image: "../images/flexbox.png",
      description: "A practical project created to practice CSS Flexbox properties and create flexible responsive web pages.",
      tech: ["HTML", "CSS", "Flexbox"],
      learned: "Deeply explored flex-grow, flex-shrink, flex-wrap properties and multi-column alignment tricks.",
      // COMMENT: Insert your actual links below
      liveUrl: "https://owusuaakosua714-crypto.github.io/T4G_Flexbox/",
      githubUrl: "https://github.com/owusuaakosua714-crypto/T4G_Flexbox.git"
    },
    {
      id: "7",
      title: "T4G Group Collaboration Project",
      category: "Other / Git Collaboration",
      badgeClass: "badge-blue",
      image: "../images/group work.png",
      description: "A team collaboration project using GitHub: added collaborators, cloned repos, and resolved merge conflicts via feature branches.",
      tech: ["Git", "GitHub", "Feature Branches"],
      learned: "Gained real-world experience in Git terminal commands, branch management, code reviews, and resolving merge conflicts.",
      liveUrl: "https://owusuaakosua714-crypto.github.io/T4G_AVA/",
      githubUrl: "https://github.com/owusuaakosua714-crypto/T4G_AVA.git"
    },
    {
      id: "8",
      title: "JavaScript Personal Information Project",
      category: "Other / JavaScript",
      badgeClass: "badge-yellow",
      image: "../images/javascript.png",
      description: "A JavaScript assignment that stores and displays personal information such as name, age, and contact information dynamically.",
      tech: ["JavaScript", "HTML", "CSS"],
      learned: "Practiced JavaScript object data structures, DOM selectors, dynamic innerHTML updates, and basic form inputs.",
      githubUrl: "https://owusuaakosua714-crypto.github.io/T4G_Hmk1/"
    }
  ];

  // ------------------------------------------------------------------------
  // 2. PROJECT FILTERS
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(button => {
      button.addEventListener('click', () => {
        // Active class toggle
        filterBtns.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedFilter = button.getAttribute('data-filter');

        projectCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');

          if (selectedFilter === 'all' || cardCategory === selectedFilter) {
            card.classList.remove('hide');
          } else {
            card.classList.add('hide');
          }
        });
      });
    });
  }

  // ------------------------------------------------------------------------
  // 3. PROJECT DETAILS MODAL
  // ------------------------------------------------------------------------
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalImg = document.getElementById('modal-img');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const modalTech = document.getElementById('modal-tech');
  const modalLearned = document.getElementById('modal-learned');
  const modalLinks = document.getElementById('modal-links');
  
  let previousActiveElement = null;

  // Open Modal logic
  const viewDetailBtns = document.querySelectorAll('.view-details-btn');
  
  if (modal && viewDetailBtns.length) {
    viewDetailBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        previousActiveElement = document.activeElement;
        const projectId = btn.getAttribute('data-id');
        const project = projectsData.find(p => p.id === projectId);

        if (!project) return;

        // Populate Modal Fields
        if (modalImg) modalImg.src = project.image;
        if (modalCategory) {
          modalCategory.textContent = project.category;
          modalCategory.className = `badge ${project.badgeClass || 'badge-green'}`;
        }
        if (modalTitle) modalTitle.textContent = project.title;
        if (modalDesc) modalDesc.textContent = project.description;
        if (modalLearned) modalLearned.textContent = project.learned;

        // Render tech pills
        if (modalTech) {
          modalTech.innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');
        }

        // Render links conditionally
        if (modalLinks) {
          let linksHTML = '';
          if (project.liveUrl) {
            linksHTML += `<a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary">Live Site &rarr;</a>`;
          }
          if (project.playUrl) {
            linksHTML += `<a href="${project.playUrl}" target="_blank" rel="noopener" class="btn btn-primary">Play Game &rarr;</a>`;
          }
          if (project.figmaUrl) {
            linksHTML += `<a href="${project.figmaUrl}" target="_blank" rel="noopener" class="btn btn-primary">View in Figma &rarr;</a>`;
          }
          if (project.githubUrl) {
            linksHTML += `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-dark">GitHub Repo &rarr;</a>`;
          }
          modalLinks.innerHTML = linksHTML;
        }

        // Display modal
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Lock scroll

        if (modalCloseBtn) modalCloseBtn.focus();
      });
    });

    // Close Modal Function
    const closeModal = () => {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; // Unlock scroll

      if (previousActiveElement) {
        previousActiveElement.focus();
      }
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

    // Close when clicking backdrop
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // Escape key listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // ------------------------------------------------------------------------
  // 4. MOBILE NAVIGATION (PROJECTS PAGE ONLY)
  // ------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('show');
      }
    });
  }

  // ------------------------------------------------------------------------
  // 5. BACK TO TOP BUTTON
  // ------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

/* ==========================================================================
   GENERAL CONTACT PAGE INTERACTION SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // Page isolation check: Only execute if contact.html elements exist
  const contactForm = document.getElementById('contactForm');
  const contactMobileBtn = document.getElementById('contact-mobile-menu-btn');
  const contactBackToTop = document.getElementById('contactBackToTop');

  // ------------------------------------------------------------------------
  // 1. FORM VALIDATION LOGIC
  // ------------------------------------------------------------------------
  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    // Helper: Validate email format
    const isValidEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };

    // Helper: Reset all field errors
    const clearErrors = () => {
      [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
        if (input) input.classList.remove('invalid');
      });
      [nameError, emailError, subjectError, messageError].forEach(span => {
        if (span) span.textContent = '';
      });
    };

    // Main validation function exposed globally or called by submission script
    window.validateContactForm = () => {
      clearErrors();
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('invalid');
        nameError.textContent = 'Please enter your name.';
        isValid = false;
      }

      // Validate Email
      if (!emailInput.value.trim()) {
        emailInput.classList.add('invalid');
        emailError.textContent = 'Please enter your email address.';
        isValid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add('invalid');
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        subjectInput.classList.add('invalid');
        subjectError.textContent = 'Please enter a subject.';
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.classList.add('invalid');
        messageError.textContent = 'Please enter your message.';
        isValid = false;
      }

      return isValid;
    };
  }

  // ------------------------------------------------------------------------
  // 2. MOBILE HAMBURGER MENU (CONTACT PAGE ONLY)
  // ------------------------------------------------------------------------
  if (contactMobileBtn) {
    const navLinks = document.getElementById('contact-nav-links');

    contactMobileBtn.addEventListener('click', () => {
      if (navLinks) navLinks.classList.toggle('show');
    });

    if (navLinks) {
      // Close when clicking link
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('show');
        });
      });

      // Close when clicking outside
      document.addEventListener('click', (e) => {
        if (!contactMobileBtn.contains(e.target) && !navLinks.contains(e.target)) {
          navLinks.classList.remove('show');
        }
      });
    }
  }

  // ------------------------------------------------------------------------
  // 3. BACK TO TOP BUTTON (CONTACT PAGE ONLY)
  // ------------------------------------------------------------------------
  if (contactBackToTop) {
    contactBackToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});