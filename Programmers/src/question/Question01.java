package question;

public class Question01 {
	
	public static void main(String[] args) {
		
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
		String over = "";
		
		/*
       	a. participant 배열에 중복원소 찾아내기.
            - participant 배열[1]~[length] 와 
		    - participant 배열[0]~[length] 을 차례대로 비교. 		    
	    b. completion [0] ~ [length] 를 participant와 비교 
	    c. participant에 존재하고, 중복원소에 포함되지 않으면 pass
            participant 모든 원소 비교후 존재하지 않으면 answer 저장 
        */
		
		//a. 
        for(int i=0; i<participant.length; i++){
            for(int j=i+1; j<participant.length; j++){
                if(participant[i].equals(participant[j])){
                    over = participant[i];
                } 
            }
        }
        
        //b.
        for(int n=0; n<completion.length; n++){
            for(int m=0; m<participant.length; m++){
                //c.
                if(!(completion[n].equals(participant[m]) && !completion[n].equals(over))) {
                    answer = participant[m];
                }
            }
        }
		
		System.out.println(answer);
		
	}

}
