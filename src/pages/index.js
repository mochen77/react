import React, { Fragment } from 'react'
import Loadable from 'react-loadable';

const loading = () => <Fragment />


const Find = Loadable({
  loader: () => import('./Find'),
  loading: loading,
});

const Flower = Loadable({
  loader: () => import('./Flower'),
  loading: loading,
});

const Factory = Loadable({
  loader: () => import('./Factory'),
  loading: loading,
});

const Mine = Loadable({
  loader: () => import('./Mine'),
  loading: loading,
});

const Login = Loadable({
  loader: () => import('./Login'),
  loading: loading,
});

const FindDetail = Loadable({
  loader: () => import('./FindDetail'),
  loading: loading,
});
const Details = Loadable({
  loader: () => import('./Details'),
  loading: loading,
});
export {
  Find,
  Flower,
  Factory,
  Mine,
  Login,
  Details,
  FindDetail
}