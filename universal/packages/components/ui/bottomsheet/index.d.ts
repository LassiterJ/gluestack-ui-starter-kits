import GorhomBottomSheet, { BottomSheetBackdrop as GorhomBottomSheetBackdrop, BottomSheetHandle } from '@gorhom/bottom-sheet';
import type { PressableProps, TextProps } from 'react-native';
import React from 'react';
type IBottomSheetProps = React.ComponentProps<typeof GorhomBottomSheet>;
export declare const BottomSheet: ({ snapToIndex, onOpen, onClose, ...props }: {
    snapToIndex?: number | undefined;
    children?: React.ReactNode;
    onOpen?: (() => void) | undefined;
    onClose?: (() => void) | undefined;
}) => React.JSX.Element;
export declare const BottomSheetPortal: ({ snapPoints, handleComponent: DragIndicator, backdropComponent: BackDrop, ...props }: any) => React.JSX.Element;
export declare const BottomSheetTrigger: ({ className, ...props }: PressableProps & {
    className?: string | undefined;
}) => React.JSX.Element;
type IBottomSheetBackdrop = React.ComponentProps<typeof GorhomBottomSheetBackdrop>;
export declare const BottomSheetBackdrop: ({ disappearsOnIndex, appearsOnIndex, className, ...props }: any) => React.JSX.Element;
type IBottomSheetDragIndicator = React.ComponentProps<typeof BottomSheetHandle>;
export declare const BottomSheetDragIndicator: ({ children, className, ...props }: any) => React.JSX.Element;
export declare const BottomSheetContent: ({ ...props }: any) => React.JSX.Element;
export declare const BottomSheetItem: ({ children, className, closeOnSelect, ...props }: PressableProps & {
    closeOnSelect?: boolean | undefined;
}) => React.JSX.Element;
export declare const BottomSheetItemText: ({ ...props }: TextProps) => React.JSX.Element;
export declare const BottomSheetScrollView: any;
export declare const BottomSheetFlatList: any;
export declare const BottomSheetSectionList: any;
export declare const BottomSheetTextInput: any;
export {};
