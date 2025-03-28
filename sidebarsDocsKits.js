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
            label: 'Dummy Kit',
            link: {
                type: 'generated-index'
            },
            collapsed: true,
            items: [
                'kits/dummy-kit/changelog',
                'kits/dummy-kit/adoption-view',
                'kits/dummy-kit/software-development-view',
                'kits/dummy-kit/software-operation-view',
                'kits/dummy-kit/documentation'
            ]
        },
        {
            type: 'category',
            label: 'Dummy Kit (autogenerated',
            link: {
                type: 'generated-index'
            },
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'kits/dummy-kit'
                }
            ]
        }
    ]
};
module.exports = sidebars;
