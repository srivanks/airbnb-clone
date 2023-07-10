"use client";

import React, { useCallback, useEffect, useState } from "react";

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  onOpen: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
  onSubmit: () => void;
};

const modal = (props: ModalProps) => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(false);
  }, [props.isOpen]);

  const handleClose = useCallback(() => {
    () => {
      if (props.disabled) return;

      setShowModal(false);
      setTimeout(() => {
        props.onClose();
      }, 300);
    };
  }, [props.disabled, props.isOpen]);

  const handleSubmit = useCallback(() => {
    if (props.disabled) return;
    props.onSubmit();
  }, [props.disabled, props.onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (props.disabled || !props.secondaryAction) return;
    props.secondaryAction();
  }, [props.disabled, props.onSubmit]);

  if(!props.isOpen) return null;
  return <div>modal</div>;
};

export default modal;
