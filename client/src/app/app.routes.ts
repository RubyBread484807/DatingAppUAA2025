import { Routes } from '@angular/router';
import { MemberList } from '../features/members/member-list/member-list';
import { Home } from '../features/home/home';
import { MemberDetail } from '../features/members/member-detail/member-detail';
import { Lists } from '../features/lists/lists';
import { Messages } from '../features/messages/messages';
import { authGuard } from '../core/guard/auth-guard';
import { TestErrors } from '../features/test-errors/test-errors';
import { NotFound } from '../shared/error/not-found/not-found';
import { ServerError } from '../shared/error/server-error/server-error';
import { MemberProfile } from '../features/member-profile/member-profile';
import { MemberPhotos } from '../features/member-photos/member-photos';
import { MemberMessages } from '../features/member-messages/member-messages';
<<<<<<< HEAD
import { memberResolver } from '../features/members/member-resolver';
=======
>>>>>>> 5c032c53062d565de699228c3c68d9b4a5ab0527

export const routes: Routes = [
    { path: "", component: Home }, //ruta raiz
    {
        path: "", //ruta vacia para agrupar las rutas que quiero proteger
        runGuardsAndResolvers: "always", //para que el guard se ejecute siempre
        canActivate: [authGuard], //aqui pongo el guard
        children: [
            { path: "members", component: MemberList, canActivate: [authGuard] }, //protejo la ruta con el guard
            { 
                path: "members/:id", 
<<<<<<< HEAD
                resolve: { member: memberResolver },
                runGuardsAndResolvers: "always",
=======
>>>>>>> 5c032c53062d565de699228c3c68d9b4a5ab0527
                component: MemberDetail,
                children: [
                    { path: "", redirectTo: "profile", pathMatch: "full" },
                    { path: "profile", component: MemberProfile, title: "Profile" },
                    { path: "photos", component: MemberPhotos, title: "Photos" },
                    { path: "messages", component: MemberMessages, title: "Messages" },
                ]
            },
            { path: "lists", component: Lists },
            { path: "messages", component: Messages },
        ] //hijos de la ruta vacia
    },
    { path: "errors", component: TestErrors },
    { path: "server-error", component: ServerError },
    { path: "**", component: NotFound } // ruta vacio cuando no hace "match" con ninguna de las anteriores
];
