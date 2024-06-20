/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ApiImport } from './routes/_api'
import { Route as IndexImport } from './routes/index'
import { Route as ApiSearchIndexImport } from './routes/_api/search/index'
import { Route as ApiPlayerIndexImport } from './routes/_api/player/index'
import { Route as ApiLoginIndexImport } from './routes/_api/login/index'
import { Route as ApiHomeIndexImport } from './routes/_api/home/index'
import { Route as ApiFavoriteIndexImport } from './routes/_api/favorite/index'
import { Route as SetupServerListImport } from './routes/setup/server.list'
import { Route as SetupServerErrorImport } from './routes/setup/server.error'
import { Route as SetupServerAddImport } from './routes/setup/server.add'
import { Route as ApiSeriesIdImport } from './routes/_api/series/$id'
import { Route as ApiPlaylistIdImport } from './routes/_api/playlist/$id'
import { Route as ApiPersonIdImport } from './routes/_api/person/$id'
import { Route as ApiLoginManualImport } from './routes/_api/login/manual'
import { Route as ApiLoginListImport } from './routes/_api/login/list'
import { Route as ApiLibraryIdImport } from './routes/_api/library/$id'
import { Route as ApiItemIdImport } from './routes/_api/item/$id'
import { Route as ApiEpisodeIdImport } from './routes/_api/episode/$id'
import { Route as ApiBoxsetIdImport } from './routes/_api/boxset/$id'
import { Route as ApiArtistIdImport } from './routes/_api/artist/$id'
import { Route as ApiAlbumIdImport } from './routes/_api/album/$id'
import { Route as ApiLoginUserIdUserNameImport } from './routes/_api/login/$userId.$userName'

// Create/Update Routes

const ApiRoute = ApiImport.update({
  id: '/_api',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ApiSearchIndexRoute = ApiSearchIndexImport.update({
  path: '/search/',
  getParentRoute: () => ApiRoute,
} as any)

const ApiPlayerIndexRoute = ApiPlayerIndexImport.update({
  path: '/player/',
  getParentRoute: () => ApiRoute,
} as any)

const ApiLoginIndexRoute = ApiLoginIndexImport.update({
  path: '/login/',
  getParentRoute: () => ApiRoute,
} as any)

const ApiHomeIndexRoute = ApiHomeIndexImport.update({
  path: '/home/',
  getParentRoute: () => ApiRoute,
} as any)

const ApiFavoriteIndexRoute = ApiFavoriteIndexImport.update({
  path: '/favorite/',
  getParentRoute: () => ApiRoute,
} as any)

const SetupServerListRoute = SetupServerListImport.update({
  path: '/setup/server/list',
  getParentRoute: () => rootRoute,
} as any)

const SetupServerErrorRoute = SetupServerErrorImport.update({
  path: '/setup/server/error',
  getParentRoute: () => rootRoute,
} as any)

const SetupServerAddRoute = SetupServerAddImport.update({
  path: '/setup/server/add',
  getParentRoute: () => rootRoute,
} as any)

const ApiSeriesIdRoute = ApiSeriesIdImport.update({
  path: '/series/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiPlaylistIdRoute = ApiPlaylistIdImport.update({
  path: '/playlist/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiPersonIdRoute = ApiPersonIdImport.update({
  path: '/person/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiLoginManualRoute = ApiLoginManualImport.update({
  path: '/login/manual',
  getParentRoute: () => ApiRoute,
} as any)

const ApiLoginListRoute = ApiLoginListImport.update({
  path: '/login/list',
  getParentRoute: () => ApiRoute,
} as any)

const ApiLibraryIdRoute = ApiLibraryIdImport.update({
  path: '/library/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiItemIdRoute = ApiItemIdImport.update({
  path: '/item/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiEpisodeIdRoute = ApiEpisodeIdImport.update({
  path: '/episode/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiBoxsetIdRoute = ApiBoxsetIdImport.update({
  path: '/boxset/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiArtistIdRoute = ApiArtistIdImport.update({
  path: '/artist/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiAlbumIdRoute = ApiAlbumIdImport.update({
  path: '/album/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiLoginUserIdUserNameRoute = ApiLoginUserIdUserNameImport.update({
  path: '/login/$userId/$userName',
  getParentRoute: () => ApiRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_api': {
      id: '/_api'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ApiImport
      parentRoute: typeof rootRoute
    }
    '/_api/album/$id': {
      id: '/_api/album/$id'
      path: '/album/$id'
      fullPath: '/album/$id'
      preLoaderRoute: typeof ApiAlbumIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/artist/$id': {
      id: '/_api/artist/$id'
      path: '/artist/$id'
      fullPath: '/artist/$id'
      preLoaderRoute: typeof ApiArtistIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/boxset/$id': {
      id: '/_api/boxset/$id'
      path: '/boxset/$id'
      fullPath: '/boxset/$id'
      preLoaderRoute: typeof ApiBoxsetIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/episode/$id': {
      id: '/_api/episode/$id'
      path: '/episode/$id'
      fullPath: '/episode/$id'
      preLoaderRoute: typeof ApiEpisodeIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/item/$id': {
      id: '/_api/item/$id'
      path: '/item/$id'
      fullPath: '/item/$id'
      preLoaderRoute: typeof ApiItemIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/library/$id': {
      id: '/_api/library/$id'
      path: '/library/$id'
      fullPath: '/library/$id'
      preLoaderRoute: typeof ApiLibraryIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/login/list': {
      id: '/_api/login/list'
      path: '/login/list'
      fullPath: '/login/list'
      preLoaderRoute: typeof ApiLoginListImport
      parentRoute: typeof ApiImport
    }
    '/_api/login/manual': {
      id: '/_api/login/manual'
      path: '/login/manual'
      fullPath: '/login/manual'
      preLoaderRoute: typeof ApiLoginManualImport
      parentRoute: typeof ApiImport
    }
    '/_api/person/$id': {
      id: '/_api/person/$id'
      path: '/person/$id'
      fullPath: '/person/$id'
      preLoaderRoute: typeof ApiPersonIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/playlist/$id': {
      id: '/_api/playlist/$id'
      path: '/playlist/$id'
      fullPath: '/playlist/$id'
      preLoaderRoute: typeof ApiPlaylistIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/series/$id': {
      id: '/_api/series/$id'
      path: '/series/$id'
      fullPath: '/series/$id'
      preLoaderRoute: typeof ApiSeriesIdImport
      parentRoute: typeof ApiImport
    }
    '/setup/server/add': {
      id: '/setup/server/add'
      path: '/setup/server/add'
      fullPath: '/setup/server/add'
      preLoaderRoute: typeof SetupServerAddImport
      parentRoute: typeof rootRoute
    }
    '/setup/server/error': {
      id: '/setup/server/error'
      path: '/setup/server/error'
      fullPath: '/setup/server/error'
      preLoaderRoute: typeof SetupServerErrorImport
      parentRoute: typeof rootRoute
    }
    '/setup/server/list': {
      id: '/setup/server/list'
      path: '/setup/server/list'
      fullPath: '/setup/server/list'
      preLoaderRoute: typeof SetupServerListImport
      parentRoute: typeof rootRoute
    }
    '/_api/favorite/': {
      id: '/_api/favorite/'
      path: '/favorite'
      fullPath: '/favorite'
      preLoaderRoute: typeof ApiFavoriteIndexImport
      parentRoute: typeof ApiImport
    }
    '/_api/home/': {
      id: '/_api/home/'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof ApiHomeIndexImport
      parentRoute: typeof ApiImport
    }
    '/_api/login/': {
      id: '/_api/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof ApiLoginIndexImport
      parentRoute: typeof ApiImport
    }
    '/_api/player/': {
      id: '/_api/player/'
      path: '/player'
      fullPath: '/player'
      preLoaderRoute: typeof ApiPlayerIndexImport
      parentRoute: typeof ApiImport
    }
    '/_api/search/': {
      id: '/_api/search/'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof ApiSearchIndexImport
      parentRoute: typeof ApiImport
    }
    '/_api/login/$userId/$userName': {
      id: '/_api/login/$userId/$userName'
      path: '/login/$userId/$userName'
      fullPath: '/login/$userId/$userName'
      preLoaderRoute: typeof ApiLoginUserIdUserNameImport
      parentRoute: typeof ApiImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  ApiRoute: ApiRoute.addChildren({
    ApiAlbumIdRoute,
    ApiArtistIdRoute,
    ApiBoxsetIdRoute,
    ApiEpisodeIdRoute,
    ApiItemIdRoute,
    ApiLibraryIdRoute,
    ApiLoginListRoute,
    ApiLoginManualRoute,
    ApiPersonIdRoute,
    ApiPlaylistIdRoute,
    ApiSeriesIdRoute,
    ApiFavoriteIndexRoute,
    ApiHomeIndexRoute,
    ApiLoginIndexRoute,
    ApiPlayerIndexRoute,
    ApiSearchIndexRoute,
    ApiLoginUserIdUserNameRoute,
  }),
  SetupServerAddRoute,
  SetupServerErrorRoute,
  SetupServerListRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_api",
        "/setup/server/add",
        "/setup/server/error",
        "/setup/server/list"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_api": {
      "filePath": "_api.tsx",
      "children": [
        "/_api/album/$id",
        "/_api/artist/$id",
        "/_api/boxset/$id",
        "/_api/episode/$id",
        "/_api/item/$id",
        "/_api/library/$id",
        "/_api/login/list",
        "/_api/login/manual",
        "/_api/person/$id",
        "/_api/playlist/$id",
        "/_api/series/$id",
        "/_api/favorite/",
        "/_api/home/",
        "/_api/login/",
        "/_api/player/",
        "/_api/search/",
        "/_api/login/$userId/$userName"
      ]
    },
    "/_api/album/$id": {
      "filePath": "_api/album/$id.tsx",
      "parent": "/_api"
    },
    "/_api/artist/$id": {
      "filePath": "_api/artist/$id.tsx",
      "parent": "/_api"
    },
    "/_api/boxset/$id": {
      "filePath": "_api/boxset/$id.tsx",
      "parent": "/_api"
    },
    "/_api/episode/$id": {
      "filePath": "_api/episode/$id.tsx",
      "parent": "/_api"
    },
    "/_api/item/$id": {
      "filePath": "_api/item/$id.tsx",
      "parent": "/_api"
    },
    "/_api/library/$id": {
      "filePath": "_api/library/$id.tsx",
      "parent": "/_api"
    },
    "/_api/login/list": {
      "filePath": "_api/login/list.tsx",
      "parent": "/_api"
    },
    "/_api/login/manual": {
      "filePath": "_api/login/manual.tsx",
      "parent": "/_api"
    },
    "/_api/person/$id": {
      "filePath": "_api/person/$id.tsx",
      "parent": "/_api"
    },
    "/_api/playlist/$id": {
      "filePath": "_api/playlist/$id.jsx",
      "parent": "/_api"
    },
    "/_api/series/$id": {
      "filePath": "_api/series/$id.tsx",
      "parent": "/_api"
    },
    "/setup/server/add": {
      "filePath": "setup/server.add.tsx"
    },
    "/setup/server/error": {
      "filePath": "setup/server.error.tsx"
    },
    "/setup/server/list": {
      "filePath": "setup/server.list.tsx"
    },
    "/_api/favorite/": {
      "filePath": "_api/favorite/index.tsx",
      "parent": "/_api"
    },
    "/_api/home/": {
      "filePath": "_api/home/index.tsx",
      "parent": "/_api"
    },
    "/_api/login/": {
      "filePath": "_api/login/index.tsx",
      "parent": "/_api"
    },
    "/_api/player/": {
      "filePath": "_api/player/index.tsx",
      "parent": "/_api"
    },
    "/_api/search/": {
      "filePath": "_api/search/index.jsx",
      "parent": "/_api"
    },
    "/_api/login/$userId/$userName": {
      "filePath": "_api/login/$userId.$userName.tsx",
      "parent": "/_api"
    }
  }
}
ROUTE_MANIFEST_END */