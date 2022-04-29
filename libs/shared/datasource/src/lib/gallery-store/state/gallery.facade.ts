import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as GalleryActions from './gallery.actions';
import * as GalleryFeature from './gallery.reducer';
import * as GallerySelectors from './gallery.selectors';

@Injectable()
export class GalleryFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(GallerySelectors.getGalleryLoaded));
  allGallery$ = this.store.pipe(select(GallerySelectors.getAllGallery));
  selectedGallery$ = this.store.pipe(select(GallerySelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(GalleryActions.init());
  }
}
