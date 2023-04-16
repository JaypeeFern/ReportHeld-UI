import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import FormatSizeOutlinedIcon from '@mui/icons-material/FormatSizeOutlined';
import AltRouteOutlinedIcon from '@mui/icons-material/AltRouteOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';

export const views = {
	sites: {
		name: 'Sites',
		icon:  <LocationOnOutlinedIcon fontSize='large'/>,
		path: 'sites',
		borderBottom: true,
		radiusTr: true,
		radiusBr: false
	},
	powerplants: {
		name: 'Power Plants',
		icon: <BoltOutlinedIcon fontSize='large'/>,
		path: 'powerplants',
		borderBottom: true
	},
	powerplantfeatures: {
		name: 'Power Plant Features',
		icon: <QuestionMarkOutlinedIcon fontSize='large'/>,
		path: 'features',
		borderBottom: true
	},
	protocols: {
		name: 'Protocols',
		icon: <ChecklistOutlinedIcon fontSize='large'/>,
		path: 'protocols',
		borderBottom: true
	},
	templateeditor: {
		name: 'Template Editor',
		icon: <FormatSizeOutlinedIcon fontSize='large'/>,
		path: 'templates',
		borderBottom: true
	},
	variants: {
		name: 'Variants',
		icon: <AltRouteOutlinedIcon fontSize='large'/>,
		path: 'variants',
		borderBottom: true
	},
	typedefinitions: {
		name: 'Type Definitions',
		icon: <QuestionMarkOutlinedIcon fontSize='large'/>,
		path: 'definitions',
		borderBottom: true
	},
	users: {
		name: 'Users',
		icon: <PersonAddAltOutlinedIcon fontSize='large'/>,
		path: 'users',
		borderBottom: true
	},
	groups: {
		name: 'Groups',
		icon: <GroupOutlinedIcon fontSize='large'/>,
		path: 'groups',
		borderBottom: true
	},
	feedback: {
		name: 'Feedback',
		icon: <FeedbackOutlinedIcon fontSize='large'/>,
		path: 'feedback',
		borderBottom: true
	},
	feedBackResults: {
		name: 'Feedback Results',
		icon: <QuestionAnswerOutlinedIcon fontSize='large'/>,
		path: 'feedback-results',
		borderBottom: true
	},
	profile: {
		name: 'Profile',
		icon: <AccountCircleOutlinedIcon fontSize='large'/>,
		path: 'profile',
		borderBottom: true,
		radiusTr: false,
		radiusBr: true
	}
};
