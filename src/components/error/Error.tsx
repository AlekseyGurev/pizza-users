import styles from './Error.module.scss';

export const Error = ({ errors }: { errors: string | undefined }) => {
  return <>{errors && <span className={styles.error}>{errors}</span>}</>;
};
