import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import {map} from 'rxjs';

import * as GalleryActions from './gallery.actions';
import * as GalleryFeature from './gallery.reducer';
import {GalleryApiService} from "../api/gallery-api.service";

@Injectable()
export class GalleryEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GalleryActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          // return GalleryActions.loadGallerySuccess({ gallery: [] });
          return this.galleryApiService.getCatsList().pipe(map((res)=>
            GalleryActions.loadGallerySuccess({
              gallery:res
            })
          ));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return GalleryActions.loadGalleryFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions,private galleryApiService:GalleryApiService) {}
}
