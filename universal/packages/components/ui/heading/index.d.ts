import React from 'react';
import { H1 } from '@expo/html-elements';
import { headingStyle } from './styles';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
type IHeadingProps = VariantProps<typeof headingStyle> & React.ComponentPropsWithoutRef<typeof H1> & {
    as?: React.ElementType;
};
declare const Heading: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<IHeadingProps, "ref"> & React.RefAttributes<unknown>>>;
export { Heading };
