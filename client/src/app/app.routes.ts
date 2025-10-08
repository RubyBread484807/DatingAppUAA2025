import { Routes } from '@angular/router';
import { MemberList } from '../features/members/member-list/member-list';
import { Home } from '../features/home/home';
import { MemberDetail } from '../features/members/member-detail/member-detail';
import { Lists } from '../features/lists/lists';
import { Messages } from '../features/messages/messages';
import { authGuard } from '../core/guard/auth-guard';
import { TestErrors } from '../features/test-errors/test-errors';

export const routes: Routes = [
    { path: "", component: Home }, //ruta raiz
    {
        path: "", //ruta vacia para agrupar las rutas que quiero proteger
        runGuardsAndResolvers: "always", //para que el guard se ejecute siempre
        canActivate: [authGuard], //aqui pongo el guard
        children: [
            { path: "members", component: MemberList, canActivate: [authGuard] }, //protejo la ruta con el guard
            { path: "members/(id)", component: MemberDetail },
            { path: "lists", component: Lists },
            { path: "messages", component: Messages },
        ] //hijos de la ruta vacia
    },
    { path: "errors", component: TestErrors },
    { path: "**", component: Home } // ruta vacio cuando no hace "match" con ninguna de las anteriores
];
