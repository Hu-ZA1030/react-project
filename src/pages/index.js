import loadable from "@loadable/component"


//使用路由懒加载
const Jsx = loadable(()=>import("./study/jsx"))
const Event  = loadable(()=>import("./study/event"))
const Condition = loadable(()=>import("./study/condition"))
const List = loadable(()=>import("./study/list"))
const Form = loadable(()=>import("./study/form"))
const Combine = loadable(()=>import("./study/combine"))
const State = loadable(()=>import("./study/state"))
const Life = loadable(()=>import("./study/life"))
const Fragment = loadable(()=>import("./study/fragment"))
const Testctx = loadable(()=>import("./study/testctx"))
const Testhoc = loadable(()=>import("./study/testhoc"))
const Testhook = loadable(()=>import("./study/hook"))
const Home = loadable(()=>import("./home"))
const HomeDetail = loadable(()=>import("./home/detail"))


export default [
    {
        id:1,
        path:"/jsx",
        component:Jsx,
        text:"Jsx学习"
    },
    {
        id:2,
        path:"/event",
        component:Event,
        text:"事件绑定"
    },
    {
        id:3,
        path:"/condition",
        component:Condition,
        text:"条件渲染"
    },
    {
        id:4,
        path:"/list",
        component:List,
        text:"列表循环"
    },
    {
        id:5,
        path:"/form",
        component:Form,
        text:"表单选定"
    },
    {
        id:6,
        path:"/state",
        component:State,
        text:"状态提升"
    },
    {
        id:7,
        path:"/combine",
        component:Combine,
        text:"组合嵌套"
    },
    {
        id:8,
        path:"/life",
        component:Life,
        text:"生命周期"
    },
    {
        id:9,
        path:"/fragment",
        component:Fragment,
        text:"片段学习"
    },
    // {
    //     id:9,
    //     path:"/testctx",
    //     component:Testctx,
    //     text:"上下文"
    // },
    {
        id:10,
        path:"/testhoc",
        component:Testhoc,
        text:"高阶组件"
    },
    {
        id:11,
        path:"/testhook",
        component:Testhook,
        text:"Hooks学习"
    },
    // {
    //     id:13,
    //     path:"/hook",
    //     component:Jsx,
    //     text:"Hooks学习"
    // },
    {
        id:12,
        path:"/",
        component:Home,
        text:"我的首页",
        children:[
            {
                id:1201,
                path:"/home/detail/:id/:name",
                component:HomeDetail,
                text:"详情页"
            }
        ]
    },

]