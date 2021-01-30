import { Link } from "gatsby"
import React from "react"

const Header = ({siteTitle, siteDescription }) => (
  <header>
    <nav role="navigation">
      <div class="nav-brand">
        <Link to="/">
          <span>{siteTitle}</span>
        </Link>
      </div>
      <ul class="nav-links">
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link href="{{site.data.info.github-url}}" target="_blank">
            GitHub
          </Link>
        </li>

        <li>
          <button
            class="color-mode-btn light--hidden"
            a
            aria-label="Toggle light mode"
          >
            <i class="far fa-sun"></i>
          </button>
          <button
            class="color-mode-btn dark--hidden"
            aria-label="Toggle dark mode"
          >
            <i class="far fa-moon"></i>
          </button>
        </li>
      </ul>
    </nav>
  </header>
)
export default Header
