import { alpha, Divider, Grid2, Link, Stack, Typography } from "@mui/material";
import { memo } from "react";

const CommonFooter = ({}) => {
  const aboutSections = [
    {
      href: "/how-it-work",
      label: "How it works",
    },
    {
      href: "/featured",
      label: "Featured",
    },
    {
      href: "/partnership",
      label: "Partnership",
    },
    {
      href: "/business-relation",
      label: "Business Relation",
    },
  ];

  const communitySections = [
    {
      href: "/events",
      label: "Events",
    },
    {
      href: "/blogs",
      label: "Blog",
    },
    {
      href: "/podcast",
      label: "Podcast",
    },
    {
      href: "/invite-a-friend",
      label: "Invite a Friend",
    },
  ];

  const socialsSections = [
    {
      href: "/discord",
      label: "Discord",
    },
    {
      href: "/instagram",
      label: "Instagram",
    },
    {
      href: "/twitter",
      label: "Twitter",
    },
    {
      href: "/facebook",
      label: "Facebook",
    },
  ];

  return (
    <Stack
      direction="column"
      sx={{
        paddingY: "36px",
        paddingX: "32px",
        backgroundColor: "primary.0",
      }}
    >
      <Grid2
        container
        size={12}
        sx={{
          mb: "36px",
        }}
      >
        <Grid2 size={7.5} sx={{}}>
          <Stack direction="column">
            <Typography
              variant="h1"
              sx={{
                fontSize: 32,
                color: "primary.500",
              }}
            >
              MORENT
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontSize: 16,
                color: "rgba(19, 19, 19, 0.6)",
                mt: "16px",
              }}
            >
              Our vision is to provide convenience<br></br>and help increase
              your sales business.
            </Typography>
          </Stack>
        </Grid2>

        <Grid2 size={1.5} sx={{}}>
          <FooterSection
            fieldKey={"about"}
            title={"About"}
            links={aboutSections}
          />
        </Grid2>

        <Grid2 size={1.5}>
          <FooterSection
            fieldKey={"community"}
            title={"Community"}
            links={communitySections}
          />
        </Grid2>

        <Grid2 size={1.5}>
          <FooterSection
            fieldKey={"socials"}
            title={"Socials"}
            links={socialsSections}
          />
        </Grid2>
      </Grid2>

      <Divider sx={{ mb: "36px" }} />

      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography
          variant="buttonText"
          sx={{
            fontSize: 16,
          }}
        >
          ©2022 MORENT. All rights reserved
        </Typography>

        <Stack direction="row" spacing="60px">
          <Typography
            variant="buttonText"
            sx={{
              fontSize: 16,
            }}
          >
            Privacy & Policy
          </Typography>

          <Typography
            variant="buttonText"
            sx={{
              fontSize: 16,
            }}
          >
            Terms & Condition
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

function FooterSection({ fieldKey, title, links }) {
  return (
    <Stack key={fieldKey} direction="column" sx={{}}>
      <Typography
        variant="h2"
        sx={{
          fontSize: 20,
          color: "secondary.500",
        }}
      >
        {title}
      </Typography>

      {/* Loop to auto add */}
      {links.map((link, index) => (
        <Link href={link.href} underline="none">
          <Typography
            variant="h3"
            sx={{
              fontSize: 16,
              color: "rgba(19, 19, 19, 0.6)",
              mt: "32px",
            }}
          >
            {link.label}
          </Typography>
        </Link>
      ))}
    </Stack>
  );
}

export default memo(CommonFooter);
