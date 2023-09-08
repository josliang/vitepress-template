interface RouterItem {
    name: string;
    path: string;
}

const jsRouter: RouterItem[] = [
    {
        name: '视频提取音频',
        path: ''
    },
]

const tsRouter: RouterItem[] = [
    {
        name: '类型挑战',
        path: ''
    },
]

const javaRouter: RouterItem[] = [
    {
        name: 'index',
        path: ''
    },
]

const CommonRouter: RouterItem[] = [
    {
        name: 'Git 命令',
        path: ''
    },
    {
        name: '解除占用端口',
        path: '/port'
    },
]

const cosName: RouterItem[] = [
    {
        name: 'cc',
        path: 'cc-1310654229'
    },
    {
        name: 'site',
        path: 'site-1310654229'
    },
    {
        name: 'aigc',
        path: 'index-1310654229'
    },
]

const routerToPath = (routers: RouterItem[], rootPath: string) => {
    return routers.map(({name, path}) => {
        return {
            text: name,
            link: `${rootPath}/${path}`
        }
    })
}
const cosNameToPath = (routers: RouterItem[]) => {
    return routers.map(({name, path}) => {
        return {
            items: [{
                text: name,
                link: `https://${path}.cos-website.ap-guangzhou.myqcloud.com`
            }]
        }
    })
}

export const cosPath = cosNameToPath(cosName)
export const jsPath = routerToPath(jsRouter, '/code/js')
export const tsPath = routerToPath(tsRouter, '/code/ts')
export const javaPath = routerToPath(javaRouter, '/code/java')
export const CommonPath = routerToPath(CommonRouter, '/code/common')