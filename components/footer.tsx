import Link from "next/link"
import { BookOpen } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold">Turdolearn</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connect, collaborate, and succeed together.
            </p>
          </div>
          
          <div>
            <h4 className="mb-3 text-sm font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/partners" className="hover:text-foreground">Find Partners</Link></li>
              <li><Link href="/groups" className="hover:text-foreground">Study Groups</Link></li>
              <li><Link href="#" className="hover:text-foreground">How It Works</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground">Help Center</Link></li>
              <li><Link href="#" className="hover:text-foreground">Guidelines</Link></li>
              <li><Link href="#" className="hover:text-foreground">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-foreground">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 TurdoLearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
