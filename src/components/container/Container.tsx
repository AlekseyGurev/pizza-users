import { LayoutProps } from '@/models';
import styles from './Container.module.scss';

export const Container = ({ children }: LayoutProps) => {
  return <div className={styles.containerPage}>{children}</div>;
};
