import React from 'react'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'
import { BORDER_RADIUS_SIZES, COLORS } from '@/app/styles'
import { buttonSize, buttonsTheme } from '@/app/types'
import { Button } from '.'

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  user-select: none;
  z-index: 100000;
`

const ModalWrapper = styled.div`
  width: 50rem;
  min-height: 18.75rem;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.WHITE};
  box-shadow: 0 0.3125rem 0.625rem rgba(0, 0, 0, 0.2);
  ${BORDER_RADIUS_SIZES.medium}
`

const ModalHeader = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid ${COLORS.GRAY_200};
`

const ModalTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
`

const ModalCloseIcon = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${COLORS.GRAY_400};
  }

  &:active {
    color: ${COLORS.GRAY_500};
  }
`

const ModalContentsWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 0rem 1.5rem;
  font-size: 1.125rem;
  border-bottom: 1px solid ${COLORS.GRAY_200};
`

const ModalButtonsWrapper = styled.div`
  display: flex;
  justify-content: end;
  flex: 1;
  gap: 0.75rem;
  padding: 1.5rem;
`

const ModalButtonWrapper = styled.div`
  ${BORDER_RADIUS_SIZES.small}
  height: 2.5rem;
  overflow: hidden;
`

interface Props {
  title: string
  children: React.ReactNode
  handleAgree: () => void
  handleRefuse: () => void
}

export function AgreementModal({ title, children, handleAgree, handleRefuse }: Props) {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseIcon onClick={handleRefuse}>
            <IoMdClose />
          </ModalCloseIcon>
        </ModalHeader>
        <ModalContentsWrapper>{children}</ModalContentsWrapper>
        <ModalButtonsWrapper>
          <ModalButtonWrapper>
            <Button size={buttonSize.MEDIUM} theme={buttonsTheme.DARK} onClick={handleRefuse}>
              NO
            </Button>
          </ModalButtonWrapper>
          <ModalButtonWrapper>
            <Button size={buttonSize.MEDIUM} theme={buttonsTheme.BRIGHT} onClick={handleAgree}>
              YES
            </Button>
          </ModalButtonWrapper>
        </ModalButtonsWrapper>
      </ModalWrapper>
    </ModalContainer>
  )
}
