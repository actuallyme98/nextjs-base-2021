import React, { useCallback } from 'react';
import { NextPage, InitialProps } from 'next';
import { useRouter } from 'next/router';
// i18n
import { useTranslation } from 'next-i18next';
// redux
import { useDispatch } from 'react-redux';
import * as AppActions from '~/redux/actions/app.action';
// components
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AuthLayout from '~/components/auth-layout';
// hooks
import { useSnackbar } from 'notistack';
// form
import { useFormik } from 'formik';
import { FormValues, initialValues, validationSchema } from './form';
// styles
import { useStyles } from './style';
// enums
import { AppRouteEnums } from '~/enums/app-route.enum';

interface Props extends InitialProps {}

const SignInPage: NextPage<Props, InitialProps> = (props) => {
  const { namespacesRequired } = props;
  const classes = useStyles(props);
  const { t } = useTranslation(namespacesRequired);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = useCallback(async (values: FormValues) => {
    const { email, password } = values;
    try {
      await dispatch(AppActions.login({ email, password }));
      router.push(AppRouteEnums.HOME);
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  }, []);

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <AuthLayout>
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.logoWrapper}>
            <img className={classes.logo} src="/vercel.svg" alt="" />
          </div>
          <div className={classes.title}>{t('welcome_back')}</div>
          <div className={classes.subTitle}>{t('sign_in_to_get_in_touch')}</div>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item className={classes.inputLabelWrapper} xs={12} sm={4}>
                <InputLabel>{t('email')}</InputLabel>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  helperText={formik.errors.email && t(formik.errors.email)}
                  error={Boolean(formik.errors.email)}
                  variant="outlined"
                  required
                  fullWidth
                  size="small"
                  autoFocus
                />
              </Grid>
              <Grid item className={classes.inputLabelWrapper} xs={12} sm={4}>
                <InputLabel>{t('password')}</InputLabel>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  helperText={formik.errors.password && t(formik.errors.password)}
                  error={Boolean(formik.errors.password)}
                  variant="outlined"
                  required
                  fullWidth
                  size="small"
                  autoComplete="password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  disabled={!formik.isValid || !formik.dirty}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {t('sign_in')}
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignInPage;
