import React from "react";
import { AgreementModal } from "..";

interface Props {
  closeModal: () => void;
  onClickDeleteButton: () => Promise<void>;
}

export function CategoryDeleteModal({ closeModal, onClickDeleteButton }: Props) {
  return (
    <AgreementModal title="Delete" handleRefuse={closeModal} handleAgree={onClickDeleteButton}>
      <div className="w-full py-[3rem] px-0">Are you sure you want to delete this category?</div>
    </AgreementModal>
  );
}
