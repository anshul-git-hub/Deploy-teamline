import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  ScrollRestoration,
} from "@tanstack/react-router";
import { MessageCircle, Home } from "lucide-react";
import { company, whatsappGeneralUrl } from "@/lib/data";
import { Layout } from "@/components/Layout";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-forest-deep px-4 text-center text-cream">
      <div className="max-w-md">
        <h1 className="text-8xl font-black text-gold">404</h1>
        <h2 className="mt-4 text-3xl font-bold">Oops! This page doesn't exist.</h2>
        <p className="mt-4 text-lg text-cream/70">
          But your dream villa does. Let's find it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-lg font-black text-forest-deep transition-transform hover:scale-105"
          >
            <Home size={20} /> Back to Home
          </Link>
          <a
            href={whatsappGeneralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-8 py-3 text-lg font-black text-gold transition-transform hover:scale-105"
          >
            <MessageCircle size={20} /> WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Team Line Eco Resort | Premium Villas on Hyderabad–Warangal Highway" },
      { name: "description", content: "Buy DTCP & RERA approved eco resort villas in Alair. Duplex, 2BHK & 1BHK villas starting ₹39 Lakhs with immediate rental income. 15 mins from Yadagirigutta. Call +91 94942 91924" },
      { name: "keywords", content: "eco resort villas hyderabad warangal highway, plots near yadagirigutta, team line infra, alair villas, RERA approved villas telangana" },
      { name: "author", content: "Team Line Infra Developers" },
      { property: "og:title", content: "Team Line Eco Resort — Luxury Villas from ₹39 Lakhs" },
      { property: "og:description", content: "Buy DTCP & RERA approved eco resort villas in Alair. Duplex, 2BHK & 1BHK villas starting ₹39 Lakhs with immediate rental income. 15 mins from Yadagirigutta. Call +91 94942 91924" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://teamlineecoresort.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Team Line Eco Resort — Luxury Villas from ₹39 Lakhs" },
      { name: "twitter:description", content: "DTCP & RERA approved eco resort villas in Alair starting ₹39 Lakhs." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeadContent />
      {children}
      <ScrollRestoration />
      <Scripts />
    </>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Outlet />
      </Layout>
    </QueryClientProvider>
  );
}
