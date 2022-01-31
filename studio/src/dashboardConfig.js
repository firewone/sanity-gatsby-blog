export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61f7dbf4f8797bae91419a1d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-tuurfas8",
                  apiId: "3abde180-62ae-41f4-aeae-44c143d56863",
                },
                {
                  buildHookId: "61f7dbf4c33a35aa9154f04d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-b9m2cppi",
                  apiId: "2fc9b2e3-49cf-42ed-96c5-15565180fb30",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/firewone/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-b9m2cppi.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
