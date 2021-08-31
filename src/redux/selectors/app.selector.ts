import { RootState } from '../configure-store';
import * as AppActions from '~/redux/actions/app.action';

export const sIsMobile = (rootState: RootState) => rootState.appState.isMobile;

export const sProfile = (rootState: RootState) => rootState.appState.profile;

export const sIsBackdropLoading = (rootState: RootState) => rootState.appState.isBackdropLoading;

export const sIsInitializeAppPending = (rootState: RootState) =>
  AppActions.initializeApp.isPending(rootState);
