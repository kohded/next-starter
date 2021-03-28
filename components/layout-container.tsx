import { useStyletron } from 'baseui';
import { FC, PropsWithChildren, ReactNode } from 'react';

interface LayoutContainerProps {
  children: ReactNode;
  isFlex?: boolean;
  role?: string;
  Tag: keyof JSX.IntrinsicElements;
}

const LayoutContainer: FC<LayoutContainerProps> = ({
  children,
  isFlex,
  role,
  Tag,
}: PropsWithChildren<LayoutContainerProps>): JSX.Element => {
  const [css] = useStyletron();

  return (
    <Tag
      className={css({
        display: 'flex',
        flex: isFlex ? 1 : undefined,
      })}
      role={role}
    >
      <div
        className={css({
          flex: 1,
        })}
      >
        {children}
      </div>
    </Tag>
  );
};

export default LayoutContainer;
