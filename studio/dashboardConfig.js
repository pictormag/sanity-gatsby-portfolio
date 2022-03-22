export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '623a48730c02023de28fa9be',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-nm4ua6og',
                  apiId: '0da785f5-6ade-4764-abbe-01df265354cd'
                },
                {
                  buildHookId: '623a4873cd5c0d42418ef86a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-emcz1kvu',
                  apiId: 'f7c23d67-808d-4203-a414-ca27c5d692a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pictormag/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-emcz1kvu.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
