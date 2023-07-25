import Vue from "vue";
import Router from "vue-router"
import AllFilms from "@/components/Films/AllFilms";
import DefineteFilm from "@/components/Films/DefineteFilm";
import MainPage from "@/components/MainPage/MainPage";
import Registration from "@/components/Registration/Registration";
import AddedWatchAllFilms from "@/components/AddedFilmsWatch/AddedWatchAllFilms";
import ChooseFormat from "@/components/Game/ChooseFormat";
import KingOfMountain from "@/components/Game/KingOfMountain";
import PlayOff from "@/components/Game/PlayOff";
import OnePieceOfNews from "@/components/MainPage/News/OnePieceOfNews";

Vue.use(Router)

let router=new Router({
    routes:[
        {
            path:'/AllFilms',
            name:'allFilms',
            component:AllFilms
        },
        {
          path:'',
          name:'MainPage',
          component:MainPage
        },
        {
            path:'/film/:id',
            name:'film',
            component:DefineteFilm
        },
        {
            path:'/news/:id',
            name:'oneNews',
            component:OnePieceOfNews
        },
        {
            path:"/registration",
            name:"registration",
            component:Registration
        },
        {
            path:"/addedToWatchFilms",
            name:"addedToWatchFilms",
            component:AddedWatchAllFilms
        },
        {
            path:"/chooseFormat",
            name:"chooseFormat",
            component:ChooseFormat
        },
        {
            path:'/voting/PlayOffs',
            name:"PlayOff",
            component:PlayOff
        },
        {
            path:'/voting/KingOfMountain',
            name:"KingOfMountain",
            component:KingOfMountain
        }

    ]
})

export default router
