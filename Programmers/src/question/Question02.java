package question;

import java.util.Arrays;

public class Question02 {
	 public int[] solution(int[] array, int[][] commands) {
	        int[] answer =  new int[commands.length];
	        //복사할 배열 
//	        int[] tmp = {};
	        // answer[0] = commands[0][0];
	        // System.out.println(answer.length);
	        
	        //  answer[0] = commands[0][0];
	        // answer[1] = commands[0][1];
	        // answer[2] = commands[0][2];
	        
	        for(int i=0; i<commands.length; i++){
	            // a. i번째 ~ j번째로 배열 잘라서 tmp에 저장 
	            int[] tmp = Arrays.copyOfRange(array,commands[i][0]-1,commands[i][1]);
	            
//	            System.out.println(tmp[i]);
	            Arrays.sort(tmp);
	            
	            //b. 그중 k번째 원소 꺼내서 return 할 배열변수에 누적 
	            answer[i] = tmp[commands[i][2]-1];
	        
	        }
	        
	        return answer;
	    }

}
