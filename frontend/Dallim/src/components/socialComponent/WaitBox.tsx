import * as S from './Box.styles';
import {postRequestAccept, postRequestReject} from '@/apis/SocialApi';
import {characterData} from '@/recoil/CharacterData';

import {useRecoilState} from 'recoil';
import {friendRequestsState, friendsState} from '@/recoil/FriendRecoil';

type WaitBoxProps = {
  userId: number;
  characterIndex: number;
  evolutionStage: number;
  nickname: string;
  level: number;
};

function WaitBox({
  userId,
  characterIndex,
  evolutionStage,
  nickname,
  level,
}: WaitBoxProps) {
  const [requestFriends, setRequestFriends] =
    useRecoilState(friendRequestsState);
  const [friends, setFriends] = useRecoilState(friendsState); // 친구 목록 상태

  const selectedCharacter =
    characterData[characterIndex].evolutions[evolutionStage].front;

  const handleRequestAccept = async () => {
    try {
      const result = await postRequestAccept(userId);
      // console.log("userId " + userId)
      if (result) {
        console.log('친구 신청 수락 성공' + userId);
        // 요청 목록에서 제거합니다.
        setRequestFriends(
          requestFriends.filter(friend => friend.userId !== userId),
        );
        // 친구 목록에 추가합니다.
        const acceptedFriend = requestFriends.find(
          friend => friend.userId === userId,
        );
        if (acceptedFriend) {
          setFriends([...friends, acceptedFriend]);
        }
      } else {
        console.log('친구 신청 수락 실패.');
      }
    } catch (error) {
      console.error('친구 신청 수락 중 오류가 발생하였습니다.', error);
    }
  };

  const handleRequestDenied = async () => {
    try {
      const result = await postRequestReject(userId);
      if (result) {
        console.log('친구 신청 거절 성공' + userId);
        setRequestFriends(
          requestFriends.filter(friend => friend.userId !== userId),
        );
      } else {
        console.log('친구 신청 거절 실패.');
      }
    } catch (error) {
      console.error('친구 신청 거절 중 오류가 발생하였습니다.', error);
    }
  };

  return (
    <S.Container>
      <S.Box>
        <S.Left>
          <S.FriendDetailButton
            onPress={() => {
              console.log('유저 상세 버튼 눌림확인');
            }}>
            <S.CharacterImage source={selectedCharacter} resizeMode="contain" />
          </S.FriendDetailButton>
        </S.Left>
        <S.Middle_Wait>
          <S.NicknameText>{nickname}</S.NicknameText>
          <S.LevelText>Lv. {level}</S.LevelText>
        </S.Middle_Wait>
        <S.Right_Wait>
          {/* 수락버튼 */}
          <S.Button_AcceptWait>
            <S.Button_Wait onPress={handleRequestAccept}>
              <S.WaitImage
                source={require('@/assets/icons/AcceptIcon.png')}
                resizeMode="contain"
              />
            </S.Button_Wait>
          </S.Button_AcceptWait>
          <S.Button_DenyWait>
            {/* 거절버튼 */}
            <S.Button_Wait onPress={handleRequestDenied}>
              <S.WaitImage
                source={require('@/assets/icons/DenyIcon.png')}
                resizeMode="contain"
              />
            </S.Button_Wait>
          </S.Button_DenyWait>
        </S.Right_Wait>
      </S.Box>
    </S.Container>
  );
}

export default WaitBox;
