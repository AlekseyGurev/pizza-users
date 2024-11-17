import styles from './Label.module.scss';

export const Label = ({
  name,
  title,
  children,
}: {
  name: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <label className={styles.label} htmlFor={name}>
      <span className={styles.labelText}>{title}</span>
      <div className={styles.inputContainer}>{children}</div>
    </label>
  );
};
