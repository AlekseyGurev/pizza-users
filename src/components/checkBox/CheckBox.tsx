import styles from './CheckBox.module.scss';

export const Checkbox = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <label className={styles.label}>
      <input className={styles.input} type="checkbox" {...props} />
      {children}
    </label>
  );
};
