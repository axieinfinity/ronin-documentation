// Credits go to https://github.com/oasisprotocol/docs

// @ts-check
import {useDocsVersion} from "@docusaurus/theme-common/internal";

/**
 * Builds an index of href => sidebar item.
 * Indexed sidebar items are doc, category (with a defined link) and link.
 *
 *  @param {import('@docusaurus/plugin-content-docs').PropSidebar} sidebarItems
 */
function reindex(sidebarItems) {
    for (const item of sidebarItems) {
        const key = item.href;
        if (key && globalThis.sidebarItemsMap[key] === undefined) {
            globalThis.sidebarItemsMap[key] = item;
        }

        if (item.type === 'category') {
            reindex(item.items)
        }
    }
}

/**
 * Finds sidebar item object in the sidebars given the item's href.
 */
export function findSidebarItem(href) {
    const docsVersion = useDocsVersion();

    if (!docsVersion) {
        throw new Error('Unexpected: cant find docsVersion in current context');
    }

    // Build the index on the first sidebar call.
    if (globalThis.sidebarItemsMap === undefined) {
        globalThis.sidebarItemsMap = {};
        for (const s in docsVersion.docsSidebars) {
            reindex(docsVersion.docsSidebars[s]);
        }
    }

    // Throw error, if the sidebar item is still not found.
    if (globalThis.sidebarItemsMap[href] === undefined) {
        console.log('Registered sidebar items:');
        console.log(globalThis.sidebarItemsMap);
        throw new Error('Unexpected: sidebar item with href '+href+' does not exist.');
    }

    return globalThis.sidebarItemsMap[href];
}