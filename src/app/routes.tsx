import { createBrowserRouter } from 'react-router';

// Guardian/Parent flows
import { WelcomeScreen } from './screens/guardian/WelcomeScreen';
import { LoginScreen } from './screens/guardian/LoginScreen';
import { RegisterScreen } from './screens/guardian/RegisterScreen';
import { SchoolSelectionScreen } from './screens/guardian/SchoolSelectionScreen';
import { StudentLinkRequestScreen } from './screens/guardian/StudentLinkRequestScreen';
import { DocumentUploadScreen } from './screens/guardian/DocumentUploadScreen';
import { AwaitingApprovalScreen } from './screens/guardian/AwaitingApprovalScreen';
import { ApprovalStatusScreen } from './screens/guardian/ApprovalStatusScreen';
import { PendingOrRejectedScreen } from './screens/guardian/PendingOrRejectedScreen';
import { DashboardScreen } from './screens/guardian/DashboardScreen';
import { MyStudentsScreen } from './screens/guardian/MyStudentsScreen';
import { StudentDetailsScreen } from './screens/guardian/StudentDetailsScreen';
import { QRCodeScreen } from './screens/guardian/QRCodeScreen';
import { PickupMethodSelectionScreen } from './screens/guardian/PickupMethodSelectionScreen';
import { QRCodeWithValidityScreen } from './screens/guardian/QRCodeWithValidityScreen';
import { OfflineModeScreen } from './screens/guardian/OfflineModeScreen';
import { HistoryScreen } from './screens/guardian/HistoryScreen';
import { NotificationsScreen } from './screens/guardian/NotificationsScreen';
import { PickupReceiptScreen } from './screens/guardian/PickupReceiptScreen';
import { TemporaryAuthRequestScreen } from './screens/guardian/TemporaryAuthRequestScreen';
import { ProfileScreen } from './screens/guardian/ProfileScreen';
import { AccountSecurityScreen } from './screens/guardian/AccountSecurityScreen';
import { PrivacyLGPDScreen } from './screens/guardian/PrivacyLGPDScreen';
import { PasswordRecoveryScreen } from './screens/guardian/PasswordRecoveryScreen';

// Staff flows
import { StaffLoginScreen } from './screens/staff/StaffLoginScreen';
import { PickupSuccessScreen } from './screens/staff/PickupSuccessScreen';
import { QRScannerScreen } from './screens/staff/QRScannerScreen';
import { ConfirmPickupScreen } from './screens/staff/ConfirmPickupScreen';
import { InvalidQRScreen } from './screens/staff/InvalidQRScreen';
import { StaffHistoryScreen } from './screens/staff/StaffHistoryScreen';

// Facial recognition flows
import { MethodSelectionScreen } from './screens/facial/MethodSelectionScreen';
import { FacialRegistrationScreen } from './screens/facial/FacialRegistrationScreen';
import { FacialValidationScreen } from './screens/facial/FacialValidationScreen';
import { FacialSuccessScreen } from './screens/facial/FacialSuccessScreen';
import { FacialFailureScreen } from './screens/facial/FacialFailureScreen';
import { FacialConsentScreen } from './screens/facial/FacialConsentScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeScreen />,
  },
  {
    path: '/login',
    element: <LoginScreen />,
  },
  {
    path: '/register',
    element: <RegisterScreen />,
  },
  {
    path: '/select-school',
    element: <SchoolSelectionScreen />,
  },
  {
    path: '/request-student-link',
    element: <StudentLinkRequestScreen />,
  },
  {
    path: '/upload-documents',
    element: <DocumentUploadScreen />,
  },
  {
    path: '/awaiting-approval',
    element: <AwaitingApprovalScreen />,
  },
  {
    path: '/approval-status',
    element: <ApprovalStatusScreen />,
  },
  {
    path: '/pending-or-rejected',
    element: <PendingOrRejectedScreen />,
  },
  {
    path: '/dashboard',
    element: <DashboardScreen />,
  },
  {
    path: '/my-students',
    element: <MyStudentsScreen />,
  },
  {
    path: '/student/:id',
    element: <StudentDetailsScreen />,
  },
  {
    path: '/pickup-method',
    element: <PickupMethodSelectionScreen />,
  },
  {
    path: '/qrcode',
    element: <QRCodeScreen />,
  },
  {
    path: '/qrcode-validity',
    element: <QRCodeWithValidityScreen />,
  },
  {
    path: '/offline',
    element: <OfflineModeScreen />,
  },
  {
    path: '/history',
    element: <HistoryScreen />,
  },
  {
    path: '/notifications',
    element: <NotificationsScreen />,
  },
  {
    path: '/pickup-receipt',
    element: <PickupReceiptScreen />,
  },
  {
    path: '/request-temporary-auth',
    element: <TemporaryAuthRequestScreen />,
  },
  {
    path: '/profile',
    element: <ProfileScreen />,
  },
  {
    path: '/account-security',
    element: <AccountSecurityScreen />,
  },
  {
    path: '/privacy',
    element: <PrivacyLGPDScreen />,
  },
  {
    path: '/password-recovery',
    element: <PasswordRecoveryScreen />,
  },
  {
    path: '/staff/login',
    element: <StaffLoginScreen />,
  },
  {
    path: '/staff/scanner',
    element: <QRScannerScreen />,
  },
  {
    path: '/staff/confirm-pickup',
    element: <ConfirmPickupScreen />,
  },
  {
    path: '/staff/invalid-qr',
    element: <InvalidQRScreen />,
  },
  {
    path: '/staff/history',
    element: <StaffHistoryScreen />,
  },
  {
    path: '/staff/pickup-success',
    element: <PickupSuccessScreen />,
  },
  {
    path: '/facial/method-selection',
    element: <MethodSelectionScreen />,
  },
  {
    path: '/facial/registration',
    element: <FacialRegistrationScreen />,
  },
  {
    path: '/facial/validation',
    element: <FacialValidationScreen />,
  },
  {
    path: '/facial/success',
    element: <FacialSuccessScreen />,
  },
  {
    path: '/facial/failure',
    element: <FacialFailureScreen />,
  },
  {
    path: '/facial/consent',
    element: <FacialConsentScreen />,
  },
]);
