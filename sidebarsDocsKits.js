/**
* Copyright (c) 2022,2023 Contributors to the Eclipse Foundation
*
* See the NOTICE file(s) distributed with this work for additional
* information regarding copyright ownership.
*
* This program and the accompanying materials are made available under the
* terms of the Apache License, Version 2.0 which is available at
* https://www.apache.org/licenses/LICENSE-2.0.
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations
* under the License.
*
* SPDX-License-Identifier: Apache-2.0
*/

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
    kits: [
      {
        type: 'category',
        label: 'Business Partner KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          'kits/business-partner-kit/changelog',
          'kits/business-partner-kit/adoption-view',
          {
            type: 'category',
            label: 'Development View',
            link: { type: 'generated-index' },
            items: [
              'kits/business-partner-kit/software-development-view/specification',
              {
                type: 'link',
                label: 'Gate API',
                href: 'https://eclipse-tractusx.github.io/api-hub/bpdm/6.3.0/gate/swagger-ui/'
              },
              {
                type: 'link',
                label: 'Pool API',
                href: 'https://eclipse-tractusx.github.io/api-hub/bpdm/6.3.0/pool/swagger-ui/'
              },
              {
                type: 'link',
                label: 'Orchestrator API',
                href: 'https://eclipse-tractusx.github.io/api-hub/bpdm/6.3.0/orchestrator/swagger-ui/'
              },
              'kits/business-partner-kit/software-development-view/use-cases'
            ]
          },
          {
            type: 'category',
            label: 'Digital Twin KIT',
            link: { type: 'generated-index' },
            collapsed: true,
            items: [
              {
                type: 'autogenerated',
                dirName: 'kits/digital-twin-kit'
              }
            ]
          },
          'kits/business-partner-kit/Operation View',
          {
            type: 'category',
            label: 'Success Stories',
            link: { type: 'generated-index' },
            items: [
              {
                type: 'autogenerated',
                dirName: 'kits/business-partner-kit/success-stories'
              }
            ]
          },
          {
            type: 'category',
            label: 'Architecture View',
            link: { type: 'generated-index' },
            items: [
              {
                type: 'autogenerated',
                dirName: 'kits/business-partner-kit/documentation-bpdm'
              }
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Circularity KIT',
        link: {
            type: 'doc',
            id: 'kits/circularity-kit/adoption-view'
        },
        items: [
            'kits/circularity-kit/changelog',
            'kits/circularity-kit/adoption-view',
            'kits/circularity-kit/glossary',
        ]
      },
      {
        type: 'category',
        label: 'Customs KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          {
            type: 'autogenerated',
            dirName: 'kits/customs-kit'
          }
        ]
      },
      {
        type: 'category',
        label: 'Data Chain KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          'kits/data-chain-kit/changelog',
          'kits/data-chain-kit/adoption-view',
          'kits/data-chain-kit/operation-view',
          {
            type: 'category',
            label: 'Development View',
            link: {
              type: 'doc',
              id: 'kits/data-chain-kit/software-development-view/software-development-view'
            },
            items: [
              {
                type: 'link',
                label: 'Item Relationship Service API',
                href: 'https://eclipse-tractusx.github.io/api-hub/item-relationship-service/6.0.1/swagger-ui/'
              }
            ]
          },
          {
            type: 'category',
            label: 'Documentation',
            items: [
              {
                type: 'autogenerated',
                dirName: 'kits/data-chain-kit/documentation'
              }
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Data Governance KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          'kits/data-governance-kit/changelog',
          'kits/data-governance-kit/adoption-view',
          {
            type: 'category',
            label: 'Development View',
            link: {
              type: 'doc',
              id: 'kits/data-governance-kit/development-view'
            },
            items: [
              {
                type: 'link',
                label: 'OpenAPI',
                href: 'https://eclipse-tractusx.github.io/api-hub/eclipse-tractusx.github.io/kit-data-governance-openAPI-0.0.1-SNAPSHOT/swagger-ui/'
              }
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Demand and Capacity Management KIT',
        link: {
          type: 'doc',
          id: 'kits/demand-and-capacity-management-kit/adoption-view/overview'
        },
        collapsed: true,
        items: [
          'kits/demand-and-capacity-management-kit/changelog',
          {
            type: 'category',
            label: 'Adoption View',
            link: {
              type: 'doc',
              id: 'kits/demand-and-capacity-management-kit/adoption-view/overview'
            },
            items: [
              'kits/demand-and-capacity-management-kit/adoption-view/glossary',
              {
                type: 'category',
                label: 'Use Case',
                link: { type: 'generated-index' },
                collapsed: true,
                items: [
                  {
                    type: 'autogenerated',
                    dirName: 'kits/demand-and-capacity-management-kit/adoption-view/use-case'
                  }
                ]
              },
              'kits/demand-and-capacity-management-kit/adoption-view/onboarding',
              'kits/demand-and-capacity-management-kit/adoption-view/qna',
              'kits/demand-and-capacity-management-kit/adoption-view/foss-app'
            ]
          },
          {
            type: 'category',
            label: 'Development View',
            link: {
              type: 'doc',
              id: 'kits/demand-and-capacity-management-kit/development-view/overview'
            },
            items: [
              'kits/demand-and-capacity-management-kit/development-view/model-WeekBasedMaterialDemand',
              'kits/demand-and-capacity-management-kit/development-view/model-WeekBasedCapacityGroup',
              'kits/demand-and-capacity-management-kit/development-view/model-IdBasedRequestForUpdate',
              'kits/demand-and-capacity-management-kit/development-view/model-IdBasedComment',
              'kits/demand-and-capacity-management-kit/development-view/api-WeekBasedMaterialDemand',
              'kits/demand-and-capacity-management-kit/development-view/api-WeekBasedCapacityGroup',
              'kits/demand-and-capacity-management-kit/development-view/api-IdBasedRequestForUpdate',
              'kits/demand-and-capacity-management-kit/development-view/api-IdBasedComment',
              'kits/demand-and-capacity-management-kit/development-view/api-aas',
              'kits/demand-and-capacity-management-kit/development-view/test-customer',
              'kits/demand-and-capacity-management-kit/development-view/test-supplier'
            ]
          },
          {
            type: 'category',
            label: 'Architecture View',
            link: {
              type: 'doc',
              id: 'kits/demand-and-capacity-management-kit/architecture-view/overview'
            },
            items: [
              'kits/demand-and-capacity-management-kit/architecture-view/dependencies'
            ]
          },
          'kits/demand-and-capacity-management-kit/operation-view'
        ]
      },
      {
        type: 'category',
        label: 'Digital Twin KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          {
            type: 'autogenerated',
            dirName: 'kits/digital-twin-kit'
          }
        ]
      },
      {
        type: 'category',
        label: 'Environmental and Social Standards KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          {
            type: 'autogenerated',
            dirName: 'kits/environmental-and-social-standards-kit'
          }
        ]
      },
      {
        type: 'category',
        label: 'Knowledge Agents KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          'kits/knowledge-agents/Knowledge Agent Changelog',
          'kits/knowledge-agents/adoption-view/intro',
          {
            type: 'category',
            label: 'Development View',
            link: {
              type: 'doc',
              id: 'kits/knowledge-agents/development-view/architecture'
            },
            collapsed: true,
            items: [
              'kits/knowledge-agents/development-view/Arc42',
              'kits/knowledge-agents/development-view/modelling',
              'kits/knowledge-agents/development-view/modules',
              'kits/knowledge-agents/development-view/reference',
              {
                type: 'category',
                label: 'API',
                link: {
                  type: 'doc',
                  id: 'kits/knowledge-agents/development-view/api'
                },
                collapsed: true,
                items: [
                  'kits/knowledge-agents/development-view/api/agent/getAgent',
                  'kits/knowledge-agents/development-view/api/agent/postAgent',
                  'kits/knowledge-agents/development-view/api/agent/skill/postSkill',
                  'kits/knowledge-agents/development-view/api/agent/skill/getSkill',
                  'kits/knowledge-agents/development-view/api/graph/postGraph',
                  'kits/knowledge-agents/development-view/api/graph/deleteGraph'
                ]
              }
            ]
          },
          {
            type: 'category',
            label: 'Operation View',
            link: {
              type: 'doc',
              id: 'kits/knowledge-agents/operation-view/deployment'
            },
            collapsed: true,
            items: [
              'kits/knowledge-agents/operation-view/agent-edc',
              'kits/knowledge-agents/operation-view/provider',
              'kits/knowledge-agents/operation-view/bridge',
              'kits/knowledge-agents/operation-view/policy',
              'kits/knowledge-agents/operation-view/testbed'
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Logistics KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          {
            type: 'autogenerated',
            dirName: 'kits/logistics-kit'
          }
        ]
      },
      {
        type: 'category',
        label: 'Modular Production Kit',
        link: {
            type: 'generated-index',
        },
        collapsed: true,
        items: [
            {
                type: 'autogenerated',
                dirName: 'kits/modular-production-kit',
            },
            {
                type: 'category',
                label: 'Software Development View',
                link: {
                    type: 'generated-index',
                },
                items: [
                    {
                        type: "link",
                        label: "Consumer: GetProductionForecast API",
                        href: 'https://eclipse-tractusx.github.io/api-hub/eclipse-tractusx.github.io/kit-modular-production-ProvideProductionForecast-openAPI-v2/swagger-ui/'
                    },
                    {
                        type: "link",
                        label: "Consumer: ProvideProductionTracking API",
                        href: 'https://eclipse-tractusx.github.io/api-hub/eclipse-tractusx.github.io/kit-modular-production-ProvideProductionTracking-openAPI-v1/swagger-ui/'
                    },
                    {
                        type: "link",
                        label: "Provider: GetProductionForecast API",
                        href: 'https://eclipse-tractusx.github.io/api-hub/eclipse-tractusx.github.io/kit-modular-production-GetProductionForecast-openAPI-v2/swagger-ui/'
                    },
                    {
                        type: "link",
                        label: "Provider: GetProductionTracking API",
                        href: 'https://eclipse-tractusx.github.io/api-hub/eclipse-tractusx.github.io/kit-modular-production-GetProductionTracking-openAPI-v1/swagger-ui/'
                    }
                ]
            }
        ]
    },
      {
        type: 'category',
        label: 'Online Simulation KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          'kits/online-simulation-kit/changelog',
          'kits/online-simulation-kit/adoption-view',
          {
            type: 'category',
            label: 'Software Development View',
            link: {
              type: 'doc',
              id: 'kits/online-simulation-kit/software-development-view'
            },
            collapsed: true,
            items: [
              {
                type: 'link',
                label: 'OSim API',
                href: 'https://eclipse-tractusx.github.io/api-hub/eclipse-tractusx.github.io/kit-osim-openAPI-2.0.0/swagger-ui/'
              }
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Predictive Unit Real-Time Information Service KIT',
        link: {
            type: 'generated-index',
        },
        collapsed: true,
        items: [
            {
                type: 'autogenerated',
                dirName: 'kits/puris-kit',
            },
        ],
      },
      {
        type: 'category',
        label: 'Product Carbon Footprint Exchange KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          {
            type: 'autogenerated',
            dirName: 'kits/product-carbon-footprint-exchange-kit'
          }
        ]
      },
      {
        type: 'category',
        label: 'Supply Chain Disruption Notification KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          {
            type: 'autogenerated',
            dirName: 'kits/supply-chain-disruption-notification-kit'
          }
        ]
      }
    ]
  };
  
  module.exports = sidebars;