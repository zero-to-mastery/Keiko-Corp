// for all headings of sections
headingsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.style.opacity = '0';
        return;
      } else {
        entry.target.style.animation = `small-from-bottom 1s forwards`;
        observer.unobserve(entry.target);
      }
    });
  },
  { rootMargin: '-150px' }
);

// for features section
const mainContent = document.querySelector('.feature ');
const leftChildren = mainContent.querySelectorAll(':scope .left-part');
const rightChildren = mainContent.querySelectorAll(':scope .right-part');
const featuresHeading = document.querySelector('.features-heading');
headingsObserver.observe(featuresHeading);
leftChildrenObserver = new IntersectionObserver(
  (children, observer) => {
    children.forEach((child) => {
      if (!child.isIntersecting) {
        child.target.style.opacity = '0';
        return;
      } else {
        child.target.classList.add('from-left');
        observer.unobserve(child.target);
      }
    });
  },
  { rootMargin: '-150px' }
);

leftChildren.forEach((child) => {
  leftChildrenObserver.observe(child);
});

rightChildrenObserver = new IntersectionObserver(
  (children, observer) => {
    children.forEach((child) => {
      if (!child.isIntersecting) {
        child.target.style.opacity = '0';
        return;
      } else {
        child.target.classList.add('from-right');
        observer.unobserve(child.target);
      }
    });
  },
  { rootMargin: '-150px' }
);

rightChildren.forEach((child) => {
  rightChildrenObserver.observe(child);
});

//feature section ends
//companies logo section
const mainCompanySection = document.querySelector('.company-logo-section');
const companyLogoTitle = document.querySelector('.companies-title-section');
const companyLogos = mainCompanySection.querySelectorAll(
  ':scope .company-logo'
);
bottomSmallPopup = new IntersectionObserver(
  (logos, observer) => {
    logos.forEach((logo) => {
      if (!logo.isIntersecting) {
        return;
      } else {
        logo.target.style.animation = `small-from-bottom 0.75s ${logo.target.dataset.delay} forwards`;
        observer.unobserve(logo.target);
      }
    });
  },
  { rootMargin: '-100px' }
);

companyLogos.forEach((logo) => {
  logo.style.opacity = '0';
  bottomSmallPopup.observe(logo);
});
headingsObserver.observe(companyLogoTitle);
//logo section ends here
//testimonial section
const testimonialHeading = document.querySelector('.testimonial_heading');
const testimonialItem = document.querySelectorAll('.testimonial_item');
bottomMediumPopup = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.style.animation = `medium-from-bottom 0.5s ${entry.target.dataset.delay} forwards`;
        observer.unobserve(entry.target);
      }
    });
  },
  { rootMargin: '-50px' }
);
testimonialItem.forEach((item) => {
  item.style.opacity = '0';
  bottomSmallPopup.observe(item);
});
headingsObserver.observe(testimonialHeading);

//testimonial section ends here
//pricing section
const pricingHeader = document.querySelector('.pricing-header');
headingsObserver.observe(pricingHeader);
const pricingCards = document.querySelectorAll('.price-card');
pricingCards.forEach((card) => {
  card.style.opacity = '0';
  bottomMediumPopup.observe(card);
});

//pricing section ends here
//logos in pricing section
const mainSection = document.querySelector('.wrapper');
const iconButtons = mainSection.querySelectorAll(':scope .button');
iconButtons.forEach((button) => {
  button.style.opacity = '0';
  bottomSmallPopup.observe(button);
});
//end
