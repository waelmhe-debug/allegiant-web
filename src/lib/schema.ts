import { CONTACT, SERVICE_AREAS, SITE } from "@/lib/site";
import { SERVICES, type Service } from "@/lib/services";

// NOTE: LocalBusiness is the correct schema type. Allegiant does not provide
// medical services, so MedicalOrganization / MedicalBusiness would be inaccurate.

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}#business`,
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}/logo.png`,
    logo: `${SITE.url}/logo.png`,
    telephone: CONTACT.phoneTel,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.region,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.geo.latitude,
      longitude: CONTACT.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: SERVICE_AREAS.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "Minnesota" },
    })),
    priceRange: "$$",
    description: SITE.description,
  };
}

export function faqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.cardDescription,
    provider: { "@id": `${SITE.url}#business` },
    areaServed: SERVICE_AREAS.map((city) => ({ "@type": "City", name: city })),
    url: `${SITE.url}/services/${service.slug}`,
  };
}

export function allServicesGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema(),
      ...SERVICES.map((s) => serviceSchema(s)),
    ],
  };
}
