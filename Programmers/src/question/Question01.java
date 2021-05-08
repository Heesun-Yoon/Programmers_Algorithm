package question;

import java.util.Arrays;

public class Question01 {
	
	public static void main(String[] args) {
		
		System.out.println("answer: "+solution());
		
	}

	public static String solution() {
		//ex1
		String[] participant = {"leo", "kiki", "eden"};
		String[] completion = {"eden", "kiki"};
		//ex2
//		String[] participant = {"marina", "josipa", "nikola", "vinko", "filipa"};
//		String[] completion = {"josipa", "filipa", "marina", "nikola"};
		//ex3
//		String[] participant = {"mislav", "stanko", "mislav", "ana"};
//		String[] completion = {"stanko", "ana", "mislav"};
		String answer = "";

		/*
		 	a. 각각 배열 정렬 
		 	b. 정렬된 배열을 차례대로 비교  (participant를 completion과 비교)
		 	c-1. 동명이인이 없는 경우 > 모든 원소 비교 후에도 다른 값이 나오지 않음 > participant 마지막 인덱스 값이 미완주자
		 	c-2. 동명이인이 있는 경우 > participant에는 있고, completion에는 없는 경우 > 값이 다른 인덱스의 participant 값이 미완주자
		  
		*/
		
		Arrays.sort(participant);
		Arrays.sort(completion);
		
//		System.out.println("participant "+Arrays.toString(participant));
//		System.out.println("completion "+Arrays.toString(completion));
		
		
		for(int i=0; i<completion.length; i++) {
			if(!participant[i].equals(completion[i])) {
				answer = participant[i];
				return answer;
			}
		}
		
		//for문 다 돌아도 다른 값이 안나왔을 경우
		answer = participant[participant.length-1];
		return answer;
	

	}

}
