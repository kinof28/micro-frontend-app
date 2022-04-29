import { createAction, props } from '@ngrx/store';
import { GalleryEntity } from './gallery.models';

export const init = createAction('[Gallery Page] Init');

export const loadGallerySuccess = createAction(
  '[Gallery/API] Load Gallery Success',
  props<{ gallery: GalleryEntity[] }>()
);

export const loadGalleryFailure = createAction(
  '[Gallery/API] Load Gallery Failure',
  props<{ error: any }>()
);
