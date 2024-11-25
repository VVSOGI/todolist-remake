import React from 'react'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'
import { colors, styles } from '@/app/styles'
import { ButtonsTheme } from '@/app/styles/button'
import { LargeButton } from '.'

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
  width: 800px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: ${styles.borderRadius.medium};
`

const ModalHeader = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid ${colors.gray_200};
`

const ModalTitle = styled.span`
  font-size: 24px;
  font-weight: 400;
`

const ModalCloseIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: ${colors.gray_400};
  }

  &:active {
    color: ${colors.gray_500};
  }
`

const ModalContentsWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 0px 24px;
  font-size: 18px;
  border-bottom: 1px solid ${colors.gray_200};
`

const ModalButtonsWrapper = styled.div`
  display: flex;
  justify-content: end;
  flex: 1;
  gap: 12px;
  padding: 24px;
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
          <LargeButton
            style={{ borderRadius: styles.borderRadius.small, minHeight: '36px' }}
            stylesTheme={ButtonsTheme.DARK}
            onClick={handleRefuse}
          >
            NO
          </LargeButton>
          <LargeButton
            style={{ borderRadius: styles.borderRadius.small, minHeight: '36px' }}
            stylesTheme={ButtonsTheme.BRIGHT}
            onClick={handleAgree}
          >
            YES
          </LargeButton>
        </ModalButtonsWrapper>
      </ModalWrapper>
    </ModalContainer>
  )
}
