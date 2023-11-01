import * as S from './CharacterPurchaseCheckModal.styles'; 
import { characterData } from '@/components/common/CharacterData';
import { Modal } from 'react-native';

import { useRecoilState } from 'recoil';
import {
    selectedCharacterIndexState,
    selectedEvolutionStageState,
} from '@/recoil/EditRecoil';

type ModalProps = {
    handleConfirm: () => void;
    handleCancel: () => void;
    purchaseModalVisible: boolean;
};

function CharacterPurchaseCheckModal({ handleConfirm, handleCancel, purchaseModalVisible }: ModalProps) {

    const [selectedCharacterIndex, setSelectedCharacterIndex] = useRecoilState(selectedCharacterIndexState);
    const [selectedEvolutionStage, setSelectedEvolutionStage] = useRecoilState(selectedEvolutionStageState);

    const CharacterData = characterData[selectedCharacterIndex].levels[selectedEvolutionStage];

    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={purchaseModalVisible}
        >
            <S.ModalContainer>
                <S.ModalContent>
                    <S.ModalHeader>
                        <S.ImageBox>
                            <S.StyledGif source={CharacterData.running} resizeMode="contain" />
                        </S.ImageBox>
                    </S.ModalHeader>
                    <S.ModalBody>
                        <S.ConfirmText>캐릭터를 구매하시겠습니까?</S.ConfirmText>
                    </S.ModalBody>
                    <S.ModalFooter>
                        <S.ModalConfirmButton onPress={handleConfirm}>
                            <S.ModalButtonText>확인</S.ModalButtonText>
                        </S.ModalConfirmButton>
                        <S.ModalCancelButton onPress={handleCancel}>
                            <S.ModalButtonText>취소</S.ModalButtonText>
                        </S.ModalCancelButton>
                    </S.ModalFooter>
                </S.ModalContent>
            </S.ModalContainer>
        </Modal>
    );
};

export default CharacterPurchaseCheckModal;
