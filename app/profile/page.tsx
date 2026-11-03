import { PageShell } from "@/shared/components/PageShell";
import { ProfileList } from "@/modules/roadmap/components/ProfileList";
import { buildMetadata } from "@/modules/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "Profile checklist for funded PhD and master's applicants",
  description: "What your academic profile needs: grades, research, recommenders, tests and more.",
  path: "/profile"
});

export default function ProfilePage() {
  return (
    <PageShell
      eyebrow="Profile"
      title="What your profile needs"
      back={{ href: "/", label: "Home" }}
      prev={{ href: "/steps", label: "Roadmap" }}
      next={{ href: "/guides", label: "Guides" }}
    >
      <ProfileList />
    </PageShell>
  );
}
