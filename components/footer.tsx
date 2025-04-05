import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-dmsa-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>Dalhousie Muslim Student Association</p>
              <p>Dalhousie University</p>
              <p>Halifax, Nova Scotia</p>
              <p className="mt-3">
                <a href="mailto:dalmsa@dal.ca" className="hover:text-dmsa-secondary">
                  dalmsa@dal.ca
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-dmsa-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-dmsa-secondary">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-dmsa-secondary">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/prayer-times" className="hover:text-dmsa-secondary">
                  Prayer Times
                </Link>
              </li>
              <li>
                <Link href="/donations" className="hover:text-dmsa-secondary">
                  Donations
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-dmsa-secondary"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-dmsa-secondary"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-dmsa-secondary"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:dalmsa@dal.ca" className="hover:text-dmsa-secondary">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Dalhousie Muslim Student Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

