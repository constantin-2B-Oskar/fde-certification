CREATE TABLE "neutralized_questions" (
	"track_id" text NOT NULL,
	"question_id" text NOT NULL,
	"correct_rate" numeric(5, 2),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "neutralized_questions_track_id_question_id_pk" PRIMARY KEY("track_id","question_id")
);
