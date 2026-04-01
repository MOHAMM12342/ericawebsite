import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Erica Travels Qatar</h3>
            <p className="text-background/70 max-w-md">
              A travel blog documenting the amazing stadiums of the 2022 FIFA
              World Cup in Qatar. Discover architecture, travel tips, and
              personal experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/stadiums"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Stadiums
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/travel-guide"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Travel Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/70">
              <li>Doha, Qatar</li>
              <li>erica@travels.qa</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
          <p>
            Website Designer: Suhail Jaber | Year 11 | Doha, Qatar | All Rights
            Reserved &copy;
          </p>
        </div>
      </div>
    </footer>
  );
}
