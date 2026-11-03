import { PageShell } from "@/shared/components/PageShell";
import { ProfileList } from "@/modules/roadmap/components/ProfileList";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { navLabels, pageText } from "@/data/text/site";

export const metadata = buildMetadata({
  title: pageText.profile.title,
  description: pageText.profile.description,
  path: "/profile"
});

export default function ProfilePage() {
  return (
    <PageShell
      eyebrow={pageText.profile.eyebrow}
      title={pageText.profile.heading}
      back={{ href: "/", label: navLabels.home }}
      prev={{ href: "/steps", label: navLabels.roadmap }}
      next={{ href: "/guides", label: navLabels.guides }}
    >
      <ProfileList />
    </PageShell>
  );
}
