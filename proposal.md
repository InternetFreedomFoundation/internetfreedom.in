# Site Architecture Proposal

This document will be treated as a draft for website architecture and is subject to change. Note that the opinions and recommendations stated may not be best practices but rather arise from the need and requirements of the IFF staff. Open to suggestions and feedback.

## Goals

- Ease of use
- Secure
- Retain Data Ownership
- No vendor lock-in
- Fast (as Static as possible)
- Highly Scalable and Reliable

## Proposed Arch

![site architecure](/Iff-JamStack.png)

## Advantages

- No changes to existing infra on AWS
- Decoupled Frontend. Framework agnostic
- Ghost for CMS, newsletters and memberships
- No downtime (CDN level uptime guaranteed)
- Ghost downtime does not affect the frontend
- Native webhook and content API from ghost
- Highly Scalable
- Fast (directly loaded from CDN)
- No vendor lock-ins
- Easily portable hosting (i.e from cloudflare pages to EC2, firebase, vercel, etc)
- Absolute data ownership
- Estimated costs for the stack < `~10 USD/month`
- Ghost webhooks can be extended to other use cases like email automation, etc.

## Recommended stack

- Nuxt.js as frontend static site generator (or simlar like one's like Gatsby, Gridsome)
- Cloudflare pages for hosting
- Cloudflare workers for serverless functions and dynamic routing
- Ghost on T4.Micro or higher

## Outlook

- Multi tenancy on ghost isn't supported yet, which means having to host a new instance of ghost for each website/domain
- [Strapi](https://strapi.io) and [Hasura](https://hasura.io) are other self-hosted options that can help achieve multi tenancy, but the ease of use is not nearly as good as ghost
- Need to offload static content from ghost to S3, R2, CDN or similar, on site rebuild. This'll eliminate the dependency for uptime of Ghost instance and also reduce latency.

## Resources

- Cloudflare [pages](https://pages.cloudflare.com/)
- Ghost [Jamstack](https://ghost.org/docs/jamstack/) and [more](https://ghost.org/changelog/jamstack/)
- Cloudflare [Jamstack](https://www.cloudflare.com/learning/performance/what-is-jamstack/)
