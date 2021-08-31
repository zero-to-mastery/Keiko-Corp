(() => {
  const footer = document.querySelector('footer');

  footer.innerHTML = `

        <div class="footer-row pl-5 pr-5">
        <section class="footer-column">
            <h2>Group 1</h2>
            <div class='sub-footer-link'>
            <a href="index.html#home">Home</a>
            <a href="index.html#feature">Features</a>
            <a href="index.html#pricing">Pricing</a>
            <a href="contact.html">Contact Us</a>
            </div>
        </section>

        <section class="footer-column">
            <h2>Group 2</h2>
            <div class='sub-footer-link'>
            <a href="privacy">Privacy Policy</a>
            <a href="terms">Terms</a>
            <a href="FAQ">FAQ</a>
            <a href="support">Support</a>
            </div>
        </section>

        <section class="footer-column">
            <h2>About Us</h2>
            <div>
            Keiko Corp. the greatest start up of all time Bruno the CEO of Keiko Corp has built the fastest growing
            tech
            start up in Silicon Valley.
            </div>
        </section>

        <section class="footer-column">
            <h2>Follow Us</h2>
            <div class="sub-footer">
            <div class='sub-footer-link socials'>
                <a href="/"><i class="fab fa-twitter"></i></a>
                <a href="/"><i class="fab fa-facebook-f"></i></a>
                <a href="/"><i class="fab fa-instagram"></i></a>
                <a href="/"><i class="fab fa-youtube"></i></a>
                <a href="/"><i class="fab fa-google"></i></a>
            </div>
            </div>
        </section>

        <!-- Scroller -->
        <div class="scroll-to-top-wrapper scroll-to-top-wrapper--hide" id='scroll-to-top-wrapper'>
            <a href="#top" class="scroll-to-top" aria-label="Scroll to Top"><i class="arrow-up"></i></a>
        </div>

        </div>

        <section id='sub-footer'>
        <p>&copy;
            <script>document.write(new Date().getFullYear())</script>
            Keiko Corp . All Rights Reserved
        </p>
        </section>
        
    `;
})();
